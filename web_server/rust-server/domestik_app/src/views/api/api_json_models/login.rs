use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct Login {
    pub username: String,
    pub password: String
}