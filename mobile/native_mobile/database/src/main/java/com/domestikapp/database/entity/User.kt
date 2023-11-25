package com.domestikapp.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName="user")
data class User(
                 @PrimaryKey @ColumnInfo(name = "id")
                 val id: String,
                 @ColumnInfo(name = "first_name")
                 val firstName: String,
                 @ColumnInfo(name = "last_name")
                 val lastName: String,
                 @ColumnInfo(name = "role")
                 val role: String,
)
