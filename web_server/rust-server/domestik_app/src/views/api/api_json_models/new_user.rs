use serde::Deserialize;


#[derive(Deserialize)]
pub struct NewUserJson {
    pub user_phone: String,
    pub name: String,
    pub lastname: String,
    pub email: String,
    pub birth_date: String,
    pub password: String,
    pub user_type: String
}
