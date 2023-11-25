package com.domestikapp.database.di.components

import com.domestikapp.database.di.components.modules.DataBaseModule
import dagger.Component
import javax.inject.Singleton

@Singleton
@Component(modules = [ DataBaseModule::class])
class DatabaseComponent {
}

