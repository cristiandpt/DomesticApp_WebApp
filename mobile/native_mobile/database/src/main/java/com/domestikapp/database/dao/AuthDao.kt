package com.domestikapp.database.dao

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import com.domestikapp.database.entity.Auth


@Dao
interface AuthDao {

    @Query("SELECT * FROM auth LIMIT 1")
    suspend fun getUserAuth(): Auth?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(auth: Auth)

    @Delete
    suspend fun delete(auth: Auth)

    @Update(onConflict = OnConflictStrategy.REPLACE)
    suspend fun update(auth: Auth)
}
