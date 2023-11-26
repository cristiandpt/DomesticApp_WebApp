import 'package:domestikapp_domain/models/auth.dart';
import 'package:domestikapp_domain/models/user.dart';

abstract class DatabaseRepository {

  Future<AuthModel> getAuth();
  Future<void> saveSession({required AuthModel auths});
  Future<UserModel> getUser();
  Future<void> cleanSession();
  Future<UserModel> updateUser({ required UserModel user});
  Future<void> saveFirebaseToken({ required String token});
  Future<String> getFirebaseToken();
  Future<void> deleteFirebaseToken();
}