use crate::schema::worker_job;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="worker_job"]
pub struct Worker_job{
    pub user_phone : String,
    pub job_id : i32,
    #[diesel(serialize_as = Option<f32>)]
    pub price : Option<f32>,
    #[diesel(serialize_as = Option<String>)]
    pub labor_type : Option<String>
}
