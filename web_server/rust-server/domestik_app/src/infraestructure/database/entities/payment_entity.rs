use crate::schema::payment;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="payment"]
pub struct PaymentEntity {
    pub payment_id: i32,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub payment_date: Option<NaiveDate>,
    #[diesel(serialize_as = Option<i32>)]
    pub invoice_id: Option<i32>,
    #[diesel(serialize_as = Option<String>)]
    pub client_phone: Option<String>,
}

impl PaymentEntity {
    pub fn new(
        payment_id: i32, 
        payment_date: Option<NaiveDate>, 
        invoice_id: Option<i32>, 
        client_phone: Option<String>) -> PaymentEntity {
        PaymentEntity {
            payment_id,
            payment_date,
            invoice_id,
            client_phone
        }
    }
}
