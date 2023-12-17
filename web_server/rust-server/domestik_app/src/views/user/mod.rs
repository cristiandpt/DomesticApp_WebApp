mod get_users.rs;
mod create;

use actix_web::web::{ServiceConfig, get, post, scope};

pub fn auth_views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("v1/auth")
            .route("/users", get().to(login::get_users))
            .route("/users", post().to(create::create))
    );
}