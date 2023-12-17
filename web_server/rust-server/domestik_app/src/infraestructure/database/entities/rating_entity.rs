use crate::schema::rating;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="rating"]
pub struct Rating {
    pub ratingid : i32,
    #[diesel(serialize_as = Option<f32>)]
    pub rate : Option<f32>,
    #[diesel(serialize_as = Option<i32>)]
    pub serviceid : Option<i32>
}
