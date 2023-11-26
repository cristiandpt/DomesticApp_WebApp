
import 'package:domestikapp_database/entity/auth.dart';
import 'package:drift/drift.dart';
import '../entity/user.dart';

part 'DomestikAppDatabase.g.dart';

@DriftDatabase(tables: [
  User, Auth
])
class DomestikAppDatabase extends _$DomestikAppDatabase {
  DomestikAppDatabase(QueryExecutor e) : super(e);

  @override
  int get schemaVersion => 2;

  @override
  MigrationStrategy get migration {
    return MigrationStrategy(
      onCreate: (m) async {
        await m.createAll();

        // Add a bunch of default items in a batch
      },
    );
  }
}