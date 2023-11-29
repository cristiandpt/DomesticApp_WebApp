use crate::schema::job;

#[derive(Queryable, Identifiable, Selectable)]
#[table_name="job"]
pub struct Job {
    pub jobid: i32,
    pub name: String
}       