use crate::infraestructure::database::entities::user_entity::UserInfo;
use crate::views::api::api_json_models::user::UserJson;

pub fn user_entity_to_user_api( user: &UserInfo) -> UserJson {
    
    UserJson {
        user_phone: user.user_phone.clone(),
        name: user.name.clone(),
        lastname: user.lastname.clone(),
        email: user.email.clone(),
        birth_date: user
            .birth_date
            .map(|date| date.to_string())
            .unwrap_or_default(),
        user_type: user.user_type.clone().unwrap_or_default(),
        password: user.password.clone().unwrap_or_default(),
    }
}