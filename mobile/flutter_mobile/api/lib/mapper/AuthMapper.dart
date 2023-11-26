import 'package:auto_mappr_annotation/auto_mappr_annotation.dart';
import 'package:domestikapp_api/api-responses/AuthResponse.dart';
import 'package:domestikapp_api/mapper/AuthMapper.auto_mappr.dart';
import 'package:domestikapp_domain/models/auth.dart';


@AutoMappr([
  MapType<AuthResponse, AuthModel>(
    fields: [
      Field('jwtToken', from: 'jwtToken'),
      Field('refreshToken', from: 'refreshToken'),
    ],
  ),
])
class AuthMapper extends $AuthMapper{}
