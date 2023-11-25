use serde::Serialize;

#[derive(Serialize)]
pub struct Login {

    pub username: String,
    pub refresh_token: String,
    pub access_token: String,
    pub password: String
}