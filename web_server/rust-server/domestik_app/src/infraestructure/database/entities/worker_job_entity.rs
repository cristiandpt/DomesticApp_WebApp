use crate::schema::worker_job;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="worker_job"]
pub struct Worker_job{
    pub user_phone : String,
    pub jobid : i32,
    #[diesel(serialize_as = Option<f32>)]
    pub price : Option<f32>,
    #[diesel(serialize_as = Option<String>)]
    pub labortype : Option<String>
}
