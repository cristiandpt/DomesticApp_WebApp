import 'package:drift/drift.dart';

@DataClassName("AuthEntity")
class Auth extends Table {
  TextColumn get jwtToken => text()();
  TextColumn get refreshToken => text()();
}