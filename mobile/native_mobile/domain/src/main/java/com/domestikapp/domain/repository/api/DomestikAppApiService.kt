package com.domestikapp.domain.repository.api

import com.domestikapp.domain.model.Auth
import com.domestikapp.domain.model.Login
import com.domestikapp.domain.model.Registration
import com.domestikapp.domain.model.User

interface DomestikAppApiService {

    suspend fun registerUser(user: User): Registration

    suspend fun loginUser( credentials: Login ): Auth

    suspend fun logoutUser(): Unit
}