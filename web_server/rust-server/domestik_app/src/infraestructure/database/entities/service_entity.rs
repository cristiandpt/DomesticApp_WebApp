use crate::schema::service;
use diesel::Insertable;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="service"]
pub struct Service {
    pub service_id : i32,
    #[diesel(serialize_as = Option<String>)]
    pub description : Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub status: Option<String>
    #[diesel(serialize_as = Option<String>)]
    pub client_phone : Option<String>
    #[diesel(serialize_as = Option<String>)]
    pub worker_phone : Option<String>
    #[diesel(serialize_as = Option<i32>)]
    pub job_id : Option<i32>

}
