package com.domestikapp.database.dao

import androidx.room.*
import com.domestikapp.database.entity.User

@Dao
interface UserDao {

    @Query("SELECT * FROM user ORDER BY id ASC LIMIT 1")
    suspend fun getUser(): User?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(user: User)

    @Delete
    suspend fun delete(user: User)

    @Update(onConflict = OnConflictStrategy.REPLACE)
    suspend fun update(user: User)
}
