use actix_web::{web, HttpResponse, Responder};
use crate::domain::model::login_temp::Login;
use crate::infraestructure::jwt::jwt_manager::JwToken;
use std::collections::HashMap;

use std::time::{SystemTime, UNIX_EPOCH};

pub async fn login(credentials: web::Json<Login>) -> impl Responder {
    let _password = credentials.password.clone();

    let current_time = SystemTime::now()
                        .duration_since(UNIX_EPOCH)
                            .expect("Failed to retrieve system time.");

    let random_number = current_time.as_secs() as i32;
    let token = JwToken::new(random_number);
    let raw_token = token.encode();
    let mut body = HashMap::new();
    body.insert("token", raw_token);
    //return HttpResponse::Ok().append_header(("token", raw_token)).take();
    HttpResponse::Ok().json(body)
}