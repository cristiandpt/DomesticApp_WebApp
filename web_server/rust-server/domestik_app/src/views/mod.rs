mod job_services;
mod auth;

use job_services::job_services_factory;
use auth::auth_views_factory;

use actix_web::web::ServiceConfig;

/// Configures the views factory for ths services web application.
///
/// This function takes a mutable reference to a `ServiceConfig` object named `app`.
///
/// # Arguments
///
/// * `app` - A mutable reference to the `ServiceConfig` object where the services will be added.
///
pub fn view_factory(app: &mut ServiceConfig) {
    job_services_factory(app);               // It configure for job_services resources module functionality.
    auth_views_factory(app);                 // It configure for auth resources module functionality.
}