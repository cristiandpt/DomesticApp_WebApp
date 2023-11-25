use std::fs::File;
#[allow(unused_imports)]
use std::fs;
use std::io::Read;

use serde_json::Map;
use serde_json::value::Value;

#[allow(unused_imports)]
use serde_json::json;
use crate::domain::model::job::JobsData;
use std::iter::FromIterator;

pub fn read_file(file_name: &str) -> Map<String, Value> {

    let mut file = File::open(file_name.to_string()).unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();
    let jobs: JobsData = serde_json::from_str(&data).unwrap();
    let services: Map<String, Value> = Map::from_iter(jobs.into_iter()
        .map(|job| (job.job_id.to_string(), Value::String(job.name))));
    services   
}

// The following code handle the posible exceptions, but is not directly implementing 
// by the fact the result type is Result<String, std::io::Error>
/* use std::fs::File;
use std::io::Read;

pub fn read_file(file_name: &str) -> Result<String, std::io::Error> {
    let mut file = match File::open(file_name) {
        Ok(f) => f,
        Err(e) => return Err(e),
    };

    let mut contents = String::new();
    match file.read_to_string(&mut contents) {
        Ok(_) => Ok(contents),
        Err(e) => Err(e),
    }
} */

/* for job in jobs.jobs {
    services.insert(
        job.jobId,
        Value::String(job.name)
    );
} */

/* Posible implementation
fn convert_jobs_to_map(jobs: Vec<Job>) -> Map<String, Value> {
    jobs.into_iter()
        .map(|job| {
            let mut job_data = Map::new();
            job_data.insert("jobId".to_string(), Value::String(job.jobId));
            job_data.insert("name".to_string(), Value::String(job.name));

            (job.jobId, Value::Object(job_data))
        })
        .collect()
}
*/