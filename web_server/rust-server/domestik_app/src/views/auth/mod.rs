mod login;
mod logout;

use actix_web::web::{ServiceConfig, get, post, scope};

pub fn auth_views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("v1/auth")
            .route("/login", post().to(login::login))
            .route("/logout", get().to(logout::logout))
    );
}