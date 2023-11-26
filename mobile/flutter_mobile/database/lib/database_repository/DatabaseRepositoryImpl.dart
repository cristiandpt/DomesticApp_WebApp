import 'package:domestikapp_domain/models/auth.dart';
import 'package:domestikapp_domain/models/user.dart';
import 'package:domestikapp_domain/repository/database_repository/DatabaseRepository.dart';

class DatabaseRepositoryImpl implements DatabaseRepository {
  @override
  Future<void> cleanSession() {
    // TODO: implement cleanSession
    throw UnimplementedError();
  }

  @override
  Future<void> deleteFirebaseToken() {
    // TODO: implement deleteFirebaseToken
    throw UnimplementedError();
  }

  @override
  Future<AuthModel> getAuth() {
    // TODO: implement getAuth
    throw UnimplementedError();
  }

  @override
  Future<String> getFirebaseToken() {
    // TODO: implement getFirebaseToken
    throw UnimplementedError();
  }

  @override
  Future<UserModel> getUser() {
    // TODO: implement getUser
    throw UnimplementedError();
  }

  @override
  Future<void> saveFirebaseToken({required String token}) {
    // TODO: implement saveFirebaseToken
    throw UnimplementedError();
  }

  @override
  Future<void> saveSession({required AuthModel auths}) {
    // TODO: implement saveSession
    throw UnimplementedError();
  }

  @override
  Future<UserModel> updateUser({required UserModel user}) {
    // TODO: implement updateUser
    throw UnimplementedError();
  }
  
}