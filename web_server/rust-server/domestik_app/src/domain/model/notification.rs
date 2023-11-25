use serde::Serialize;

#[derive(Serialize)]
pub struct Notification {

    pub id: i16,
    pub time: String,
    pub date: String
}