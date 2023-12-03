use crate::schema::client;
use::diesel::Insertable;


#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="client"]
pub struct Client {
   pub phone: String,
   #[diesel(serialize_as = Option<String>)]
   pub services_url: Option<String>
}
