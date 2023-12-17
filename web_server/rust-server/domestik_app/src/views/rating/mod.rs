mod rate.rs;

use actix_web::web::{ServiceConfig, get, post, scope};

pub fn auth_views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("v1/auth")
            .route("/rating", post().to(login::login))
    );
}