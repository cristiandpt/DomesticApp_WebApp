use actix_web::{web, HttpResponse};
use crate::domain::model::user::User;
use crate::jwt::JwToken;
use bcrypt::{hash, DEFAULT_COST};


// This is to do, should no work
pub async fn register(user: web::Json<User>) -> HttpResponse {
    // Encrypt the password
    let hashed_password = hash(&user.password, DEFAULT_COST).expect("Failed to hash password");

    // Save the user to the database

    // Create a JWT token
    let token = JwToken::new(user.username.clone());
    let raw_token = token.encode();

    // Return the token as the response
    HttpResponse::Ok().json(raw_token)
}