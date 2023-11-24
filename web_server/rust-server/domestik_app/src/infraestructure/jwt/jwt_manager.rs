use actix_web::dev::Payload;
use actix_web::{Error, FromRequest, HttpRequest};
use futures::future::{ ok, Ready, err};
#[allow(unused_imports)]
use uuid::Uuid;
use actix_web::error::ErrorUnauthorized;

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};
use jsonwebtoken::{
    encode, 
    decode, 
    Header, 
    Algorithm,
    Validation,
    EncodingKey,
    DecodingKey
};

use chrono::{DateTime, Utc};
use chrono::serde::ts_seconds;
//use crate::config::Config;

use std::env;

#[derive(Serialize, Deserialize)]
pub struct JwToken {
    pub user_id: i32,
    #[serde(with = "ts_seconds")]
    pub minted: DateTime<Utc>
}

impl FromRequest for JwToken {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;
    fn from_request(req: &HttpRequest, _: &mut Payload) -> Self::Future {
        match req.headers().get("Authorization") {
            Some(token) => {
                let raw_token = token.to_str().unwrap().to_string();
                let token_result = JwToken::from_token(raw_token);
                match token_result {
                    Some(token) => {
                        return ok(token)
                    },
                    None => {
                        let error = ErrorUnauthorized("Invalid token");
                        return err(error)
                    }
                } 
            },
            None => {
              let error = ErrorUnauthorized("Token not found");
              return err(error)
            }
        }
    }
}

impl JwToken {

    pub fn get_key() -> String {
        let api_key =  String::from("55cb3a3429cb4158e19149ee0ea65aa384b13ffe61adaef3a41d6d1a6f63330"); //env::var("API_KEY").unwrap();
        api_key
    }

    pub fn encode(self) -> String {
        let api_key = EncodingKey::from_secret(JwToken::get_key().as_ref());
        let token = encode(&Header::default(), &self, &api_key).unwrap();
        token
    }

    pub fn new( user_id: i32) -> Self {
        let timestamp = Utc::now();
        return JwToken {
            user_id,
            minted: timestamp
        }
    }

    pub fn from_token(token: String) -> Option<Self> {
        let api_key = DecodingKey::from_secret(JwToken::get_key().as_ref());
        let token_result = decode::<JwToken>(&token, &api_key, &Validation::new(Algorithm::HS256));
        match token_result {
            Ok(token_data) => {
                return Some(token_data.claims)
            },
            Err(_) => {
                return None
            }
        }
    }
}