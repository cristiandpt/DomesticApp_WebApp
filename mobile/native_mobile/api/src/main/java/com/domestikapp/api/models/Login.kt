package com.domestikapp.api.models

import com.google.gson.annotations.SerializedName

data class LoginPayload (
    @SerializedName("user_name")
    val userName: String,
    val password: String
)