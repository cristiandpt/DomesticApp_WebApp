import 'package:auto_mappr_annotation/auto_mappr_annotation.dart';
import 'package:domestikapp_api/api-responses/LoginRequest.dart';
import 'package:domestikapp_api/mapper/LoginMapper.auto_mappr.dart';
import 'package:domestikapp_domain/models/login.dart';

@AutoMappr([
  MapType<LoginModel, LoginRequest>(
    fields: [
      Field('userName', from: 'userName'),
      Field('password', from: 'password'),
    ],
  ),
])
class LoginMapper extends $LoginMapper {}

