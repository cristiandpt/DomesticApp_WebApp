use crate::schema::notification;
use diesel::Insertable;
use chrono::{NaiveDate, NaiveTime};


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="notification"]
pub struct Notification {
    pub notification_id : i32,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub notification_date : Option<NaiveDate>,
    #[diesel(serialize_as = Option<NaiveTime>)]
    pub notification_time : Option<NaiveTime>,
    #[diesel(serialize_as = Option<String>)]
    pub worker_phone : Option<String>,
    #[diesel(serialize_as = Option<i32>)]
    pub service_id : Option<i32>
}
