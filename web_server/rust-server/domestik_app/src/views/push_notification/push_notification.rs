// [
// dependencies
// ]
// reqwest = "0.11"

// use reqwest::header::{HeaderMap, HeaderValue, AUTHORIZATION};
// use serde::Serialize;

// #[derive(Serialize)]
// struct FcmNotification {
//     to: String,
//     notification: FcmNotificationContent,
// }

// #[derive(Serialize)]
// struct FcmNotificationContent {
//     title: String,
//     body: String,
// }

// async fn send_push_notification() -> Result<(), Box<dyn std::error::Error>> {
//     let server_key = "YOUR_FCM_SERVER_KEY";
//     let fcm_token = "YOUR_FCM_TOKEN";

//     let notification = FcmNotification {
//         to: fcm_token.to_string(),
//         notification: FcmNotificationContent {
//             title: "Hello".to_string(),
//             body: "This is a push notification from Rust!".to_string(),
//         },
//     };

//     let client = reqwest::Client::new();
//     let response = client
//         .post("https://fcm.googleapis.com/fcm/send")
//         .header(AUTHORIZATION, format!("key={}", server_key))
//         .json(&notification)
//         .send()
//         .await?;

//     println!("FCM response: {:?}", response.text().await?);

//     Ok(())
// }

// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     send_push_notification().await.expect("Failed to send push notification");

//     Ok(())
// }



// use actix_web::{web, App, HttpRequest, HttpResponse, HttpServer};
// use futures::{SinkExt, StreamExt};
// use std::sync::{Arc, Mutex};
// use tungstenite::Message;

// async fn notifications(
//     req: HttpRequest,
//     stream: web::Payload,
//     data: web::Data<Arc<Mutex<Vec<Box<dyn SinkExt<Message>>>>>>,
// ) -> Result<HttpResponse, actix_web::Error> {
//     let (mut sender, receiver) = tokio::sync::mpsc::unbounded_channel();

//     let addr = req.peer_addr().unwrap(); // Get the address of the client

//     // Add the sender to the list of active connections
//     data.lock().unwrap().push(Box::new(sender.clone()));

//     let mut stream = stream
//         .map(|result| {
//             let msg = result.unwrap();
//             Message::Binary(msg.into_bytes())
//         })
//         .map(Ok);

//     // Send messages received from the client to the sender
//     tokio::spawn(async move {
//         while let Some(item) = stream.next().await {
//             if let Ok(msg) = item {
//                 sender.send(msg).unwrap();
//             }
//         }
//     });

//     // Send notifications to the client
//     while let Some(Ok(notification)) = receiver.recv().await {
//         sender.send(notification).unwrap();
//     }

//     // Remove the sender from the list of active connections
//     let mut connections = data.lock().unwrap();
//     connections.retain(|conn| !Arc::ptr_eq(&conn, &sender));

//     Ok(HttpResponse::InternalServerError().finish())
// }

// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     let connections = Arc::new(Mutex::new(Vec::<Box<dyn SinkExt<Message>>>::new()));

//     HttpServer::new(move || {
//         App::new()
//             .data(connections.clone())
//             .route("/notifications", web::get().to(notifications))
//     })
//     .bind("127.0.0.1:8080")?
//     .run()
//     .await
// }