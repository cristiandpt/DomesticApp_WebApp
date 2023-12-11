use crate::schema::worker;
use diesel::Insertable;
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="worker"]
pub struct Worker{
    #[diesel(serialize_as = Option<String>)]
    pub phone : Option<String>,
    #[diesel(serialize_as = Option<String>)]
    pub cc_url : Option<String>,
    pub available : bool,
    #[diesel(serialize_as = Option<String>)]
    pub pfp_url : Option<String>
}
