use crate::schema::notification;
use diesel::Insertable;
use chrono::{NaiveDate, NaiveTime};


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="notification"]
pub struct Notification {
    pub notificationid : i32,
    #[diesel(serialize_as = Option<NaiveDate>)]
    pub notificationdate : Option<NaiveDate>,
    #[diesel(serialize_as = Option<NaiveTime>)]
    pub notificationtime : Option<NaiveTime>,
    #[diesel(serialize_as = Option<String>)]
    pub worker_phone : Option<String>,
    #[diesel(serialize_as = Option<i32>)]
    pub serviceid : Option<i32>
}
