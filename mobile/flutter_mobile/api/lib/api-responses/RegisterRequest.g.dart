// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'RegisterRequest.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RegisterRequest _$RegisterRequestFromJson(Map<String, dynamic> json) =>
    RegisterRequest(
      jwtToken: json['first_name'] as String,
      refreshToken: json['last_name'] as String,
      email: json['email'] as String,
      cellphone: json['cellphone'] as String,
      serviceToken: json['service_token'] as String,
    );

Map<String, dynamic> _$RegisterRequestToJson(RegisterRequest instance) =>
    <String, dynamic>{
      'first_name': instance.jwtToken,
      'last_name': instance.refreshToken,
      'email': instance.email,
      'cellphone': instance.cellphone,
      'service_token': instance.serviceToken,
    };
