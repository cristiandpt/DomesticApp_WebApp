package com.domestikapp.api.manager


import com.domestikapp.api.api.UserApi
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object ApiConfiguration {
    val retrofit by lazy {
        Retrofit.Builder()
            .baseUrl("http://127.0.0.1")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(UserApi::class.java)
    }
}