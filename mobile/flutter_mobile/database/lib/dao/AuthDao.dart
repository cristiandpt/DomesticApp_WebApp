// the _TodosDaoMixin will be created by drift. It contains all the necessary
// fields for the tables. The <MyDatabase> type annotation is the database class
// that should use this dao.
import 'package:domestikapp_database/database/DomestikAppDatabase.dart';
import 'package:domestikapp_database/entity/auth.dart';
import 'package:drift/drift.dart';

part 'AuthDao.g.dart';

@DriftAccessor(tables: [Auth])
class AuthDao extends DatabaseAccessor<DomestikAppDatabase> with _$AuthDaoMixin {
  // this constructor is required so that the main database can create an instance
  // of this object.
  AuthDao(DomestikAppDatabase db) : super(db);

}