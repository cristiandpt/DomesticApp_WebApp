// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'AuthResponse.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

AuthResponse _$AuthResponseFromJson(Map<String, dynamic> json) => AuthResponse(
      jwtToken: json['jtw_token'] as String,
      refreshToken: json['refresh_token'] as String,
    );

Map<String, dynamic> _$AuthResponseToJson(AuthResponse instance) =>
    <String, dynamic>{
      'jtw_token': instance.jwtToken,
      'refresh_token': instance.refreshToken,
    };
