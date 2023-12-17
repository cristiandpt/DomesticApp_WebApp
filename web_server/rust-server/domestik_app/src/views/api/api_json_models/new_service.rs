use serde::Deserialize;

#[derive(Deserialize)]
pub struct NewJobServiceJson {

    client_phone: String,
    service_id: i32,
    description: String,
    status: String,
    worker_phone: String
}