import 'package:auto_mappr_annotation/auto_mappr_annotation.dart';
import 'package:domestikapp_database/database/DomestikAppDatabase.dart';
import 'package:domestikapp_database/mapper/userMapper.auto_mappr.dart';
import 'package:domestikapp_domain/models/user.dart';

@AutoMappr([
  MapType<UserEntity, UserModel>(
    fields: [
      Field('name', from: 'firstName'),
      Field('age', from: 'id'),
    ],
  ),
])
class Mappr extends $Mappr {}