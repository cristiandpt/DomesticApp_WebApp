use super::user::User;

pub struct Client{

    user: User,
    service_url: &str,
    payment_method: &str
}