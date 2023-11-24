mod login;
mod logout;

use actix_web::web::{ServiceCOnfig, get, scope}

pub fn auth_views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("v1/auth")
            .route("/login", get().to(login::login))
            .route("/logout", get().to(logout::logout))
    );
}