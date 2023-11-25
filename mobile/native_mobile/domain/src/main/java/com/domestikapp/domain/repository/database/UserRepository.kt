package com.domestikapp.domain.repository.database

import com.domestikapp.domain.model.User

interface UserRepository {

    suspend fun getUserById(userId: String): User?

    suspend fun insertUser(user: User)

    suspend fun updateUser(user: User)

    suspend fun deleteUser(user: User)
}