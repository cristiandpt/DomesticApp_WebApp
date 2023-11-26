import 'package:auto_mappr_annotation/auto_mappr_annotation.dart';
import 'package:domestikapp_database/database/DomestikAppDatabase.dart';
import 'package:domestikapp_database/mapper/userMapper.auto_mappr.dart';
import 'package:domestikapp_domain/models/auth.dart';

@AutoMappr([
  MapType<AuthEntity, AuthModel>()
])
class AuthMapper extends $Mappr {}
