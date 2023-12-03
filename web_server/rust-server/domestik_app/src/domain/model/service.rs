use serde::Serialize;

#[derive(Serialize)]
pub struct Service {

    id: i32,
    description: String,
}

impl Service {
        
    pub fn new(id: i32, description: String) -> Service {
        Service {
            id,
            description
        }
    }
}