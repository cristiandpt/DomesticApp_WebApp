package com.domestikapp.api.mapper

import com.domestikapp.api.models.AuthResponse
import com.domestikapp.api.models.NewUserPayload
import com.domestikapp.domain.model.Auth
import com.domestikapp.domain.model.User


fun AuthResponse.toDomainModel(): Auth {
    return Auth( jwtToken = this.jwtToken, refreshToken = this.refreshToken)
}
