use crate::utils::json_reader::json_file_reader;
use actix_web::{web, Responder};
use serde_json::value::Value;
use serde_json::Map;

use crate::diesel;
use diesel::prelude::*;

use crate::infraestructure::database::database_connection::DB;

pub async fn get_services(db: DB) -> impl Responder {
    let services: Map<String, Value> = json_file_reader::read_file("src/mock-data/services.json");
    web::Json(services)
}