use crate::schema::login;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="login"]
pub struct Login {
    
    pub loginid: i32,
    #[diesel(serialize_as = Option<String>)]
    pub username: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub password: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub access_token: Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub refresh_token: Option<String>,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub refresh_token_expiration_date: Option<NaiveDate>,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub access_token_expiration_date: Option<NaiveDate>,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub user_phone: Option<String>
}
