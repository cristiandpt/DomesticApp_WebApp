use serde::Serialize;

#[derive(Serialize)]
pub struct Invoice {
    
    pub id: i16,
    pub total: f64
}