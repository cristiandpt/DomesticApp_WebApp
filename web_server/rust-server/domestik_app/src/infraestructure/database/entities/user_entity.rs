use crate::schema::user_info;
use diesel::Insertable;
use chrono::NaiveDate;

#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="user_info"]
pub struct UserInfo {
    pub user_phone: String,
    #[diesel(serialize_as = Option<String>)]
    pub name: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub lastname: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub email: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub address: Option<String>,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub birth_date: Option<NaiveDate>,
    #[diesel(serialize_as = Option<String>)]
    pub user_type: Option<String>
}
