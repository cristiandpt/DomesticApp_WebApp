use serde::Deserialize;

#[derive(Deserialize)]
pub struct NewPaymentJson {

    pub payment_id: i32,
    pub payment_date: String,
    pub invoice_id: i32,
    pub client_phone: String
}
