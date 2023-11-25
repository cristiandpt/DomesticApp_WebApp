#[allow(unused_imports)]
use serde_json;
use serde::ser::{Serialize, Serializer, SerializeStruct};
use serde::Deserialize;
use std::iter::IntoIterator;

#[derive(Deserialize)]
pub struct Job {

    pub job_id: String,
    pub name: String
}

#[derive(Deserialize)]
pub struct JobsData {
    pub jobs: Vec<Job>,
}

impl IntoIterator for JobsData {
    type Item = Job;
    type IntoIter = std::vec::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        self.jobs.into_iter()
    }
}

impl Serialize for Job {

    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut state = serializer.serialize_struct("Job", 2)?;
        state.serialize_field("job_id", &self.job_id)?;
        state.serialize_field("name", &self.name)?;
        state.end()
    }
}

impl Serialize for JobsData {

    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut state = serializer.serialize_struct("JobsData", 1)?;
        state.serialize_field("jobs", &self.jobs)?;
        state.end()
    }
}