mod get_user;
mod create;
//mod upload_document;
//mod upload_profile_image;

use actix_web::web::{ServiceConfig, get, post, scope};

pub fn user_views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("v1/user")
            .route("/users", get().to(get_user::get_users))
            .route("/users", post().to(create::create))
          //  .route("/users/{user_id}/upload_document", post().to(upload_document::upload))
          //  .route("/users/{user_id}/upload_profile_image", post().to(upload_profile_image::upload))
    );
}