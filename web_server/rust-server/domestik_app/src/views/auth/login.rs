use actix_web::{web, HttpResponse, Responser};
use crate::domain::model::login_temp::Login;
use crate::jwt::JwToken;
use std::collections::HashMap;

use std::time::{SystemTime, UNIX_EPOCH};

pub async fn login(credentials: web::Json<Login>) -> impl HttpResponse {
    let password = credentials.password.clone();

    let current_time = SystemTime::now()
                        .duration_since(UNIX_EPOCH)
                            .expect("Failed to retrieve system time.");

    let random_number = current_time.as_secs() as u32;
    let token = JwToken::new(random_number);
    let raw_token = token.encode();
    let mut body = HashMap::new();
    body.insert("token", raw_token);
    HttpResponse::Ok().json(body)
}