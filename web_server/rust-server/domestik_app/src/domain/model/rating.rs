use serde::Serialize;

#[derive(Serialize)]
pub struct Rating {
    
    pub id: i16,
    pub rate: f32
}