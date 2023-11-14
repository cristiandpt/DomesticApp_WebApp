use super::user::User;

pub struct Worker {

    user: User,
    available: bool,
    cc_url: &str
}