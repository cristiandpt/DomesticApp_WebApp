use super::user::User;
use serde::Serialize;

#[derive(Serialize)]
pub struct Worker {

    user: User,
    available: bool,
    cc_url: String
}