package com.domestikapp.api.api

import com.domestikapp.api.models.AuthResponse
import com.domestikapp.api.models.NewUserPayload
import okhttp3.Credentials
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface UserApi {

    @GET("v1/auth/logout")
    suspend fun logout(): String

    @GET("v1/auth/login")
    suspend fun login(@Body credentials: Credentials): AuthResponse

    @POST("v1/auth/register")
    suspend fun register(@Body user: NewUserPayload): AuthResponse
}