pub mod get;


use actix_web::web::{ServiceConfig, get, post, scope};

pub fn auth_views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("v1/auth")
            .route("/workers", get().to(get::get_workers))
            //.route("/workers", post().to(create::create))
            // .route("/workers/{worker_id}/upload_document", post().to(upload_document::upload))
            // .route("/workers/{worker_id}/upload_profile_image", post().to(upload_profile_image::upload))
    );
}