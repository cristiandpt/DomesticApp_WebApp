use crate::schema::payment;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="payment"]
<<<<<<< HEAD
pub struct PaymentEntity {
    pub paymentid: i32,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub paymentdate: Option<NaiveDate>,
    #[diesel(serialize_as = Option<i32>)]
    pub invoiceid: Option<i32>,
    #[diesel(serialize_as = Option<String>)]
    pub client_phone: Option<String>,
}

impl PaymentEntity {
    pub fn new(
        paymentid: i32, 
        paymentdate: Option<NaiveDate>, 
        invoiceid: Option<i32>, 
        client_phone: Option<String>) -> PaymentEntity {
        PaymentEntity {
            paymentid,
            paymentdate,
            invoiceid,
            client_phone
        }
    }
}
=======
pub struct payment {
    pub paymentid : i32,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub paymentdate : Option<NaiveDate>,
    #[diesel(serialize_as = Option<i32>)]
    pub invoiceid : Option<i32>,
    #[diesel(serialize_as = Option<String>)]
    pub client_phone : Option<String>,
}
>>>>>>> origin
