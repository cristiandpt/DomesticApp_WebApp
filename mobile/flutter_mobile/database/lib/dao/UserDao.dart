

import 'package:domestikapp_database/database/DomestikAppDatabase.dart';
import 'package:domestikapp_database/entity/user.dart';
import 'package:drift/drift.dart';

part 'UserDao.g.dart';

// the _TodosDaoMixin will be created by drift. It contains all the necessary
// fields for the tables. The <MyDatabase> type annotation is the database class
// that should use this dao.
@DriftAccessor(tables: [User])
class UserDao extends DatabaseAccessor<DomestikAppDatabase> with _$UserDaoMixin {
  // this constructor is required so that the main database can create an instance
  // of this object.
  UserDao(DomestikAppDatabase db) : super(db);

}