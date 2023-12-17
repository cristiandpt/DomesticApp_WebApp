use crate::schema::address;
use crate::diesel::Insertable;

#[derive(Queryable, Insertable, Clone, Debug)]
#[table_name="address"]
pub struct Address {
    
    #[diesel(serialize_as = String)]
    pub address_loc: String,
    #[diesel(serialize_as = String)]
    pub user_phone: String
}
