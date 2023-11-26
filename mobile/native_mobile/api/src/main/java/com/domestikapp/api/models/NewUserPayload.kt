package com.domestikapp.api.models

import com.google.gson.annotations.SerializedName

data class NewUserPayload(
    @SerializedName("first_name")
    val firstName: String,
    @SerializedName("last_name")
    val lastName: String
)
