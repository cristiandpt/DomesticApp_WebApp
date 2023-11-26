import 'package:drift/drift.dart';

@DataClassName("UserEntity")
class User extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get firstName => text()();
  TextColumn get lastName => text()();
  TextColumn get address => text()();
}