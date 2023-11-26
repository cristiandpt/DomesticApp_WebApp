import 'package:json_annotation/json_annotation.dart';
part 'LoginRequest.g.dart';

@JsonSerializable()
class LoginRequest{
  @JsonKey(name: 'jtw_token')
  String userName;
  @JsonKey(name: 'refresh_token')
  String password;

  LoginRequest({required this.userName, required this.password});

  factory LoginRequest.fromJson(Map<String, dynamic> json) => _$LoginRequestFromJson(json);
  Map<String, dynamic> toJson() => _$LoginRequestToJson(this);
}