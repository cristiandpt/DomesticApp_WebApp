#[allow(unused_imports)]
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use actix_service::Service;

use dotenv::dotenv;

#[macro_use] extern crate diesel;
extern crate dotenv;

mod schema;
mod views;
mod utils;
mod domain;
mod infraestructure;

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    dotenv().ok();

    HttpServer::new(|| {
        App::new()
            .wrap_fn(|req, srv| {
                let future = srv.call(req);
                async {
                    let response = future.await?;
                    Ok(response)
                }
            })
            .configure(views::view_factory)
    })
    .bind(("0.0.0.0", 8081))?
    .run()
    .await
}