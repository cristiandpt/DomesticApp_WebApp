use crate::infraestructure::database::entities::job_entity::Job;
use crate::domain::model::service::Service;

pub fn JobEntitytoJobApi( job: &Job) -> Service {
    let jobName = match &job.name {
            Some(name) => String::from(name.to_string()),
            None => String::from(""),
     };
   Service::new(
        job.jobid,
        jobName
   )
}
