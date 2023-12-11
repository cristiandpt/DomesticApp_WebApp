use serde::Serialize;
use super::user::User;

#[derive(Serialize)]
pub struct Client{

    pub user: User,
    pub service_url: String,
    pub payment_method: String
}