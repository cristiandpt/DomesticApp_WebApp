// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'LoginRequest.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

LoginRequest _$LoginRequestFromJson(Map<String, dynamic> json) => LoginRequest(
      userName: json['jtw_token'] as String,
      password: json['refresh_token'] as String,
    );

Map<String, dynamic> _$LoginRequestToJson(LoginRequest instance) =>
    <String, dynamic>{
      'jtw_token': instance.userName,
      'refresh_token': instance.password,
    };
