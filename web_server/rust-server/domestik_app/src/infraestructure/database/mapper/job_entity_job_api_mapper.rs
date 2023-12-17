use crate::infraestructure::database::entities::job_entity::Job;
use crate::domain::model::service::Service;

pub fn job_entity_to_job_api( job: &Job) -> Service {
    let job_name = match &job.name {
            Some(name) => String::from(name.to_string()),
            None => String::from(""),
     };
   Service::new(
        job.jobid,
        job_name
   )
}


