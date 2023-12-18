extern crate bcrypt;
use bcrypt::verify;
use crate::schema::user_info;
use diesel::{Insertable, Queryable};
use chrono::NaiveDate;

#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="user_info"]
pub struct UserInfo {
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


impl UserInfo {
    pub fn verify(&self, password: String) -> bool {
        match self.password {
            None => false,
            Some(ref pass) => {
                bcrypt::verify(password.as_str(), pass).unwrap()
            }
        }
    }

}
