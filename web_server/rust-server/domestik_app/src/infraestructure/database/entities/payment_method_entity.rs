use crate::schema::payment_method;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Clone, Debug)]
#[table_name="payment_method"]
pub struct Payment_method {
    pub id : i32,
    #[diesel(serialize_as = Option<i32>)]
    pub cvv : Option<i32>,
    #[diesel(serialize_as = Option<String>)]
    pub owner_name : Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub card_number : Option<String>, 
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub expiration_date : Option<NaiveDate>,
    pub client_phone : String
}
