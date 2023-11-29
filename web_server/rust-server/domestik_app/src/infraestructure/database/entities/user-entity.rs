use crate::schema::user_info;
use chrono::NaiveDateTime;


#[derive(Queryable, Identifiable, Insertable)]
#[table_name="user_info"]
pub struct Item {
    pub user_phone: String,
    pub name: String,
    pub lastname: String,
    pub email: String,
    pub address: String,
    pub birth_date: Option<NaiveDateTime>,
    pub user_type: String
}
