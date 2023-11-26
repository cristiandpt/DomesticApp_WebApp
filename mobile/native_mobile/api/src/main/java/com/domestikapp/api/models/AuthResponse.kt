package com.domestikapp.api.models

import com.google.gson.annotations.SerializedName

data class AuthResponse (
    @SerializedName("jwt_token")
    val jwtToken: String,
    @SerializedName("refresh_token")
    val refreshToken: String
 )