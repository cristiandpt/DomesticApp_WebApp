use serde::Serialize;

#[derive(Serialize)]
pub struct UserJson {
    pub user_phone: String,
    pub name: String,
    pub lastname: String,
    pub email: String,
    pub address: String,
    pub birth_date: String,
    pub password: String,
    pub user_type: String
}