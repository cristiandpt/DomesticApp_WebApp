use actix_multipart::Multipart;
use actix_web::{web, App, HttpResponse, HttpServer};
use futures::{StreamExt, TryStreamExt};
use std::fs::File;
use std::io::Write;
use tempfile::NamedTempFile;

async fn upload(mut payload: Multipart) -> Result<HttpResponse, actix_web::Error> {
    while let Some(item) = payload.next().await {
        let mut field = item?;
        let content_type = field.content_type().to_string();

        if content_type.starts_with("image/") {
            let mut file = NamedTempFile::new()?;
            while let Some(chunk) = field.try_next().await? {
                file.write_all(&chunk)?;
            }

            // Do something with the file (e.g., save it, process it, etc.)
            // For example, you can move the file to a specific directory:
            let file_path = "/path/to/save/" + file.path().to_string_lossy().as_ref();
            file.persist(&file_path)?;

            println!("Uploaded profile image: {}, Content Type: {}", file_path, content_type);
        } else {
            return Ok(HttpResponse::BadRequest().body("Invalid file format"));
        }
    }

    Ok(HttpResponse::Ok().finish())
}