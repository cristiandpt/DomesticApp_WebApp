use actix_web::{ Responder, HttpResponse};

use crate::diesel;
use diesel::prelude::*;

use crate::infraestructure::database::entities::user_entity::UserInfo;
use crate::schema::user_info;

use crate::infraestructure::database::database_connection::DB;
use crate::infraestructure::database::mapper::user_entity_to_user_api::user_entity_to_user_api;
use crate::views::api::api_json_models::user::UserJson;

pub async fn get_users(db: DB) -> impl Responder {

    let user = user_info::table.load::<UserInfo>(&db.connection).unwrap();
    let api_services = user.iter()
        .map(user_entity_to_user_api)
        .collect::<Vec<UserJson>>();
    HttpResponse::Ok().json(api_services)
}