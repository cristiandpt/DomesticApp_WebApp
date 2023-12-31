mod get_all_services;

use actix_web::web::{ServiceConfig, get, scope};


/// Configures the job services resources for a domestik web application.
///
/// This function takes a mutable reference to a `ServiceConfig` object named `app`.
/// It adds a new service to the `app` object using the `service` method.
/// The service is defined within a `scope` with the path segment "v1/job_services".
/// The service is associated with the route "services" and uses the `get` method to handle HTTP GET requests.
/// The handler for this route is the `get_services` function from the `get_all_services` module.
///
/// # Arguments
///
/// * `app` - A mutable reference to the `ServiceConfig` object where the services will be added. This rest api web server.
///
pub fn job_services_factory( app: &mut ServiceConfig) {
    app.service(                                            // Here there is a issue about understand the web::resource configuration in comparation with scope method
        scope("v1/job_services")                            // More info about https://actix.rs/docs/application  -- Tell about a dynamic path semgments for incomming request https://docs.rs/actix-web/4.4.0/actix_web/web/fn.resource.html 
        .route("services", get().to(get_all_services::get_services))
    );
}