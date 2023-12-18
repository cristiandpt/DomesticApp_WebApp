use actix_web::{web, Responder, HttpResponse};
use crate::domain::model::payment::Payment;
use bcrypt::{hash, DEFAULT_COST};
use crate::views::api::api_json_models::new_payment::NewPaymentJson;
use crate::infraestructure::database::database_connection::DB;
use crate::schema::payment;
use crate::infraestructure::database::entities::payment_entity::PaymentEntity;

use crate::diesel;
use diesel::prelude::*;

use chrono::NaiveDate;

pub async fn register(new_payment: web::Json<NewPaymentJson>, db: DB) -> impl Responder {

    let parsed_date = NaiveDate::parse_from_str(&new_payment.payment_date.clone(), "%Y-%m-%d").unwrap();

    let payment = PaymentEntity::new(
                    new_payment.payment_id.clone(),
                    Some(parsed_date),
                    Some(new_payment.invoice_id.clone()),
                    Some(new_payment.client_phone.clone())
                 );

    let insert_payment_result = diesel::insert_into(payment::table)
                                    .values(&payment)
                                        .execute(&db.connection);

    match insert_payment_result {
        Ok(_) => HttpResponse::Created(),
        Err(_) => HttpResponse::Conflict()
    }

}