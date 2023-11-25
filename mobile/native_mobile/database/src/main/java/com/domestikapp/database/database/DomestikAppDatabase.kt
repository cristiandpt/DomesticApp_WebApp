package com.domestikapp.database.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.sqlite.db.SupportSQLiteDatabase
import com.domestikapp.database.dao.AuthDao
import com.domestikapp.database.dao.UserDao
import com.domestikapp.database.entity.Auth
import com.domestikapp.database.entity.User
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch


@Database(
    entities = [User::class, Auth::class],
    version = 1,
    exportSchema = true
)
public abstract class DomestikAppDatabase : RoomDatabase(){

    abstract fun userDao() : UserDao
    abstract fun authDao() : AuthDao

    companion object {

        @Volatile
        private var INSTANCE : DomestikAppDatabase? = null

        fun getDatabase(context: Context, scope: CoroutineScope): DomestikAppDatabase {
            return INSTANCE ?: synchronized(this){
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    DomestikAppDatabase::class.java,
                    "domestikapp_database"
                ).addCallback(DbCallback(scope))
                    .build()

                INSTANCE = instance

                // return instance
                instance
            }
        }
    }

    private class DbCallback(val scope: CoroutineScope): Callback(){
        override fun onCreate(db: SupportSQLiteDatabase) {
            super.onCreate(db)

            INSTANCE?.let { userDB ->
                scope.launch {
                    println(userDB)
                    // if you want to populate database
                    // when RoomDatabase is created
                    // populate here
                }
            }
        }
    }
}