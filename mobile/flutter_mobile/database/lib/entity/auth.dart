import 'package:drift/drift.dart';

class Auth extends Table {
  IntColumn get jwtToken => integer().autoIncrement()();
  TextColumn get refreshToken => text()();
}