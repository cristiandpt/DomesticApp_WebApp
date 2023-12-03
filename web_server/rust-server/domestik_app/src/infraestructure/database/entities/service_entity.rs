use crate::schema::service;
use diesel::Insertable;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="service"]
pub struct Service {
    pub serviceid : i32,
    #[diesel(serialize_as = Option<String>)]
    pub description : Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub status: Option<String>
    #[diesel(serialize_as = Option<String>)]
    pub client_phone : Option<String>
    #[diesel(serialize_as = Option<String>)]
    pub worker_phone : Option<String>
    #[diesel(serialize_as = Option<i32>)]
    pub jobid : Option<i32>

}
