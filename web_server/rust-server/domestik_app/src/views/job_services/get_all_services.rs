use crate::utils::json_reader::json_file_reader;
use actix_web::{web, Responder};
use serde_json::value::Value;
use serde_json::Map;

pub async fn get_services() -> impl Responder {
    let services: Map<String, Value> = json_file_reader::read_file("src/mock-data/services.json");
    web::Json(services)
}