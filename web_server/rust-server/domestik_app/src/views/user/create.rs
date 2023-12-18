use actix_web::{web, HttpResponse};
use bcrypt::{hash, DEFAULT_COST};

use crate::infraestructure::database::entities::new_user::NewUser;
use crate::views::api::api_json_models::new_user::NewUserJson;
use crate::infraestructure::database::database_connection::DB;
use crate::infraestructure::jwt::jwt_manager::JwToken;
use crate::schema::user_info;
use chrono::NaiveDate;

pub async fn create(new_user: web::Json<NewUserJson>, db: DB) -> HttpResponse {

    println!("Arriving to create user");
    // Encrypt the password
    //let hashed_password = hash(&user.password, DEFAULT_COST).expect("Failed to hash password");
    let parsed_date = NaiveDate::parse_from_str(&new_user.birth_date.clone(), "%Y-%m-%d").unwrap();
    // Create a new user model for the database from he new user json model.
    let user = NewUser::new(
        new_user.user_phone.clone(),
        new_user.name.clone(),
        new_user.lastname.clone(),
        new_user.email.clone(),
        parsed_date.to_string(),
        new_user.password.clone(),
        new_user.user_type.clone()
    );

    // Create a JWT token
    let token = JwToken::new(new_user.name.clone());
    let raw_token = token.encode();

    // let insert_result = diesel::insert_into(user_info::table).values(&new_user).execute(&db.connection);
    // match insert_result {
    //     Ok(_) => HttpResponse::Created(),
    //     Err(_) => HttpResponse::Conflict()
    // }

    // Return the token as the response
    HttpResponse::Ok().json(raw_token)
}
