package com.domestikapp.api.mapper

import com.domestikapp.api.models.LoginPayload
import com.domestikapp.api.models.NewUserPayload
import com.domestikapp.domain.model.Login
import com.domestikapp.domain.model.Registration

fun Login.toLoginPayloadApi(): LoginPayload {
    return LoginPayload(userName = this.userName, password = this.password)
}

fun Registration.toApiModel(): NewUserPayload {
    return NewUserPayload(firstName = this.firstName, lastName = this.lastName)
}