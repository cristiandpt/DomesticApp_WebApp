use crate::schema::job;

#[derive(Queryable, Clone)]
pub struct Job {
    pub jobid: i32,
    #[diesel(serialize_as = Option<String>)]
    pub name: Option<String>
}       