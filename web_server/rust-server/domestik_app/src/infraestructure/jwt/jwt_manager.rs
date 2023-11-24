use actix_server::dev::Paylaod;
use actix_web::{Error, FromRequest, HttpRequest};
use futures::future::{ ok, Ready};


pub struct JwToken {
    pub id: String,
    pub token: String
};

impl FromRequest for JwToken {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;
    fn from_request(req: &HttpRequest, _: &mut Paylaod) -> Self::Future {
        match req.headers().get("Authorization") {
            Some(token) => {
                let token =  JwToken{
                    id: "A user id",
                    token: token.to_str().unwrap().to_string()
                } 
                ok(token);
            },
            None => {
              let token = JwToken{
                id: "",
                token:  String::from("nothing found")
              }
              ok(token)
            }
        }
    }
}