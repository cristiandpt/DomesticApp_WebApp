use actix_web::{web, HttpResponse, Responder};
use crate::infraestructure::jwt::jwt_manager::JwToken;
use crate::views::api::api_json_models::login::Login;
use crate::views::api::api_json_models::login_response::LoginResponse;
use std::collections::HashMap; 

use crate::infraestructure::database::database_connection::DB;
use crate::infraestructure::database::entities::user_entity::UserInfo;
use crate::schema::user_info;

use crate::diesel;
use diesel::prelude::*;
use serde_json::to_string;

use std::time::{SystemTime, UNIX_EPOCH};

pub async fn login(credentials: web::Json<Login>, db: DB) -> impl Responder {
    let _password = credentials.password.clone();

    let current_time = SystemTime::now()
                        .duration_since(UNIX_EPOCH)
                            .expect("Failed to retrieve system time.");


    let user = user_info::table.filter(user_info::columns::user_phone.eq(credentials.username.clone())
                .or(user_info::columns::email.eq(credentials.username.clone())))
                    .load::<UserInfo>(&db.connection).unwrap();

    

    if user.len() == 0 {
        return HttpResponse::NotFound().await.unwrap()
    } else if user.len() > 1 {
        return HttpResponse::Conflict().await.unwrap()
    }

    match user[0].verify(_password) {
        true => {
            let token = JwToken::new(user[0].user_phone.clone());
            let raw_token = token.encode();
            let mut body = HashMap::new();
            let response = LoginResponse{
                token: raw_token.clone()
            };
            let bodyjson = serde_json::to_string(&response).unwrap();
            body.insert("token", raw_token);
            HttpResponse::Ok().json(body)
        },
        false => HttpResponse::Unauthorized().finish()
    }
}

