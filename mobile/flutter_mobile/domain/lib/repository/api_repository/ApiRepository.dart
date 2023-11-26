import 'package:domestikapp_domain/models/auth.dart';

import 'package:domestikapp_domain/models/login.dart';
import 'package:domestikapp_domain/models/user.dart';

abstract class ApiRepository {

  Future<AuthModel> login({required LoginModel login});
  Future<AuthModel> register({required UserModel newUser});
}