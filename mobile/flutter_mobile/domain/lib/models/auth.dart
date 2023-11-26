class AuthModel {
  final String _jwtToken;
  final String _refreshToken;

  AuthModel({
    required String jwtToken,
    required String refreshToken,
  })  : _jwtToken = jwtToken,
        _refreshToken = refreshToken;

  String get jwtToken => _jwtToken;
  String get refreshToken => _refreshToken;
}