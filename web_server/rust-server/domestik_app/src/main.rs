#[allow(unused_imports)]
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

mod views;
mod utils;
mod domain;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .configure(views::view_factory)
    })
    .bind(("0.0.0.0", 8081))?
    .run()
    .await
}