import 'package:domestikapp_domain/models/auth.dart';
import 'package:domestikapp_domain/models/login.dart';
import 'package:domestikapp_domain/models/user.dart';
import 'package:domestikapp_domain/repository/api_repository/ApiRepository.dart';

class ApiRepositoryImpl implements ApiRepository {
  @override
  Future<AuthModel> login({required LoginModel login}) {
    // TODO: implement login
    throw UnimplementedError();
  }

  @override
  Future<AuthModel> register({required UserModel newUser}) {
    // TODO: implement register
    throw UnimplementedError();
  }

}