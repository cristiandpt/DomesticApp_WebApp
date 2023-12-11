use crate::schema::payment;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="payment"]
pub struct payment {
    pub paymentid : i32,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub paymentdate : Option<NaiveDate>,
    #[diesel(serialize_as = Option<i32>)]
    pub invoiceid : Option<i32>,
    #[diesel(serialize_as = Option<String>)]
    pub client_phone : Option<String>,
}
