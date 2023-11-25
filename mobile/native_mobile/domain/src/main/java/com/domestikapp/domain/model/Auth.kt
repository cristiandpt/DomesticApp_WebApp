package com.domestikapp.domain.model


data class Auth(
    val jwtToken: String,
    val refreshToken: String
)