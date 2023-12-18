extern crate bcrypt;
use bcrypt::verify;
use crate::schema::user_info;
use diesel::{Insertable, Queryable};
use chrono::NaiveDate;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use bcrypt::{DEFAULT_COST, hash};

#[derive(Deserialize)]
#[derive(Insertable, Clone)]
#[table_name="user_info"]
pub struct NewUser {
    pub user_phone: String,
    #[diesel(serialize_as = String)]
    pub name: String,
    #[diesel(serialize_as = String)]
    pub lastname: String,
    #[diesel(serialize_as = String)]
    pub email: String,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub birth_date: Option<NaiveDate>,
    #[diesel(serialize_as = Option<String>)]
    pub user_type: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub password: Option<String>
}


impl NewUser {
    pub fn new( user_phone: String, name: String, lastname: String, 
                email: String, birth: String, user_type: String, password: String) -> NewUser {
        let hash_password = hash(password, DEFAULT_COST).unwrap();
        let unique_id = Uuid::new_v4().to_string();
        let birth_date = NaiveDate::parse_from_str(&birth, "%Y-%m-%d")
            .ok()
            .and_then(|date| Some(Some(date)))
            .unwrap_or(None);
        NewUser {
            user_phone,
            name,
            lastname,
            email,
            birth_date,
            user_type: Some(user_type),
            password: Some(hash_password), 
        }
    }
}
