use crate::schema::invoice;
use crate::diesel::Insertable; 
use chrono::NaiveDate;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="invoice"]
pub struct Invoice {
    pub invoiceid : i32,
    #[diesel(serialize_as = Option<f32>)]
    pub total : Option<f32>,
    #[diesel(serialize_as = Option<i32>)]
    pub serviceid : Option<i32>
}
