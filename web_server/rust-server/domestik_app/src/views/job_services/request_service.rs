use actix_web::{web, HttpResponse};
use crate::domain::model::service::Service;
use crate::infraestructure::jwt::jwt_manager::JwToken;
use crate::views::api::api_json_models::new_service::NewJobServiceJson;

use bcrypt::{hash, DEFAULT_COST};


// This is to do, should no work
pub async fn request_service(service: web::Json<NewJobServiceJson>) -> HttpResponse {
    // Encrypt the password

    // Save the user to the database
    //  Do diese registration

    //Do the firebase notification
    // Create a JWT token
    // let token = JwToken::new(service.username.clone());
    // let raw_token = token.encode();

    // Return the token as the response
    HttpResponse::Ok().into() //.json(raw_token)
}

// 2(m-1)k