use crate::schema::worker_rating;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="worker_rating"]
pub struct Worker_rating{
    pub id : i32,
    pub user_phone : String,
    #[diesel(serialize_as = Option<i32>)]
    pub ratingid : Option<i32>
}
