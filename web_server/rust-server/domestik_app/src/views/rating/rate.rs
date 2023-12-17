use actix_web::{web, HttpResponse, Responder};
use crate::domain::model::login_temp::Login;
use crate::infraestructure::jwt::jwt_manager::JwToken;
use std::collections::HashMap;

pub async fn service_rating(rate: web::Json<Rating>) -> impl Responder {

    let service_id = rate.id.clone();
    let rating = rate.rate.clone();

   //Do Diesel operation for rating saving

    let random_number = current_time.as_secs() as i32;
    let token = JwToken::new(random_number);
    let raw_token = token.encode();
    let mut body = HashMap::new();
    body.insert("token", raw_token);
    //return HttpResponse::Ok().append_header(("token", raw_token)).take();
    HttpResponse::Ok().json(body)
}