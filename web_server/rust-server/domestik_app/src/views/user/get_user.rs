use actix_web::{ Responder, HttpResponse};

use crate::diesel;
use diesel::prelude::*;

use crate::infraestructure::database::entities::user_entity::User;
use crate::schema::user_info;

use crate::infraestructure::database::database_connection::DB;
use crate::infraestructure::database::mapper::user_entity_user_api_mapper::user_entity_to_user_api;
use crate::domain::model::service::Service;

pub async fn get_users(db: DB) -> impl Responder {

    let user = user_info::table.load::<User>(&db.connection).unwrap();
    let api_services = users.iter()
        .map(user_entity_to_user_api)
        .collect::<Vec<User>>();
    HttpResponse::Ok().json(api_services)
}