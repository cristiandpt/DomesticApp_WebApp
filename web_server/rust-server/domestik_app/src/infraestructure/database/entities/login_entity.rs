use crate::schema::login;
use chrono::NaiveDateTime;


#[derive(Queryable, Identifiable, Insertable)]
#[table_name="user_info"]
pub struct Login {
    
    pub loginid: i32,
    pub username: String,
    pub password: String,
    pub access_token: String,
    pub refresh_token: String,
    pub refresh_token_expiration_date: String,
    pub access_token_expiration_date: String,
    pub user_phone: String,
}
