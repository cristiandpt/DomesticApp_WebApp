class LoginModel {
  final String _userName;
  final String _password;

  LoginModel({
    required String userName,
    required String password,
  })  : _userName = userName,
        _password = password;

  String get userName => _userName;
  String get password => _password;
}