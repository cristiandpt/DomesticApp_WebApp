use serde::Serialize;

#[derive(Serialize)]
pub struct User {
    
    email: String,
    phone: String
}