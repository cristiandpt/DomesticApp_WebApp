use actix_server::dev::Paylaod;
use actix_web::{Error, FromRequest, HttpRequest};
use futures::future::{ ok, Ready};
use uuid::Uuid;
use actix_web::error::ErrorUnauthorized;

use serde::{Deserialize, Serialize};
use jsonwebtoken::{
    encode, 
    decode, 
    Header, 
    Algorithm,
    Validation,
    EncodingKey,
    DecondingKey
};

use chrono::[DateTime, Utc];
use chrono::serde::ts_seconds;
//use crate::config::Config;

use std::env;

pub struct JwToken {
    pub user_id: i32,
    #[serde(with = "ts_seconds")]
    pub minted: DateTime<Utc>
};

impl FromRequest for JwToken {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;
    fn from_request(req: &HttpRequest, _: &mut Paylaod) -> Self::Future {
        match req.headers().get("Authorization") {
            Some(token) => {
                let raw_token = raw_token.to_str().unwrap().to_string();
                let token_result = JwToken::from_token(raw_token);
                match token_result {
                    Some(token) => {
                        ok(token)
                    },
                    None => {
                        let error = ErrorUnauthorized("Invalid token");
                        return err(error);
                    }
                } 

                ok(token);
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
        let api_key = env::var("API_KEY").unwrap();
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
        let api_key = DecondingKey::from_secret(JwToken::get_key().as_ref());
        let token_result = decode::<JwToken>(&token, &api_key, &Validation::new(Algorithm::HS256));
        match token_result {
            Ok(token_data) => {
                Some(token_data.claims)
            },
            Err(_) => {
                return None
            }
        }
    }
}