use actix_web::dev::Payload;
use actix_web::error::ErrorServiceUnavailable;
use actix_web::{Error, FromRequest, HttpRequest};

use futures::future::{Ready, ok, err};

use lazy_static::lazy_static;

use diesel::{
    r2d2::{ Pool, ConnectionManager, PooledConnection },
    pg::PgConnection,
};

use std::env;

type PgPool = Pool<ConnectionManager<PgConnection>>;

pub struct DbConnection {
    pub db_connection: PgPool
}


lazy_static!{
    pub static ref DBCONNECTION: DbConnection = {
        let connection_string = env::var("DATABASE_URL").unwrap();
    DbConnection {
        db_connection: PgPool::builder().max_size(8)
        .build(ConnectionManager::new(connection_string))
        .expect("Failed to create db connection pool.")
    }
 };
}

pub fn establish_connection() -> PooledConnection<ConnectionManager<PgConnection>> {
    return DBCONNECTION.db_connection.get().unwrap();
}

pub struct DB {
    pub connection: PooledConnection<ConnectionManager<PgConnection>>
}

impl FromRequest for DB {
    type Error = Error;
    type Future = Ready<Result<DB, Error>>;
    
    fn from_request(_: &HttpRequest, _: &mut Payload) -> Self::Future {
        match DBCONNECTION.db_connection.get() {
            Ok(connection) => {
                return ok(DB{connection})
            },
            Err(_) => {
                return err(ErrorServiceUnavailable("Could not make connection to the database"))
            }
        }
    }

}


