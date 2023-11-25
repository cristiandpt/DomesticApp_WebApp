package com.domestikapp.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "auth")
data class Auth(
    @PrimaryKey @ColumnInfo(name = "jwt_token")
    val jwtToken: String,
    @ColumnInfo(name = "refresh_token")
    val refreshToken: String
)
