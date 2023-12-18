use serde::{Deserialize, Serialize};
use uuid::Uuid;
use bcrypt::{DEFAULT_COST, hash};

#[derive(Deserialize)]
#[derive(Insertable,Clone)]
#[table_name="user_info"]
pub struct NewUserInfo {
    pub username: String,
    pub email: String,
    pub password: String,
    pub unique_id: String
}

impl NewUserInfo {
    pub fn new( username: String, email: String, password: String) -> NewUserInfo {
        let hash_password = hash(password, DEFAULT_COST).unwrap();
        let unique_id = Uuid::new_v4().to_string();
        NewUserInfo {
            username,
            email,
            password,
            unique_id
        }
    }
}

