use serde::{Deserialize, Serialize};
use uuid::Uuid;
use bcrypt::{DEFAULT_COST, hash};

#[derive(Deserialize)]
#[derive(Insertable, Clone)]
pub struct NewUser {
    pub username: String,
    pub email: String,
    pub password: String,
    pub unique_id: String
}


impl NewUser {
    pub fn new( username: String, email: String, password: String) -> NewUser {
        let hash_password = hash(password, DEFAULT_COST).unwrap();
        let unique_id = Uuid::new_v4().to_string();
        NewUser {
            username,
            email,
            password,
            unique_id
        }
    }
}