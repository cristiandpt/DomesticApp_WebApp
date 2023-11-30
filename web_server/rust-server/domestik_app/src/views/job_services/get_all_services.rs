use crate::utils::json_reader::json_file_reader;
use actix_web::{ Responder, HttpResponse};

use crate::diesel;
use diesel::prelude::*;

use crate::infraestructure::database::entities::job_entity::Job;
use crate::schema::job;

use crate::infraestructure::database::database_connection::DB;
use crate::infraestructure::database::mapper::job_entity_job_api_mapper::JobEntitytoJobApi;
use crate::domain::model::service::Service;

pub async fn get_services(db: DB) -> impl Responder {
    let services = job::table.load::<Job>(&db.connection).unwrap();
    let apiServices = services.iter()
        .map(JobEntitytoJobApi)
        .collect::<Vec<Service>>();
    HttpResponse::Ok().json(apiServices)
}