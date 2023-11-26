import 'package:json_annotation/json_annotation.dart';
part 'AuthResponse.g.dart';

@JsonSerializable()
class AuthResponse{
  @JsonKey(name: 'jtw_token')
  String jwtToken;
  @JsonKey(name: 'refresh_token')
  String refreshToken;

  AuthResponse({required this.jwtToken, required this.refreshToken});

  factory AuthResponse.fromJson(Map<String, dynamic> json) => _$AuthResponseFromJson(json);
  Map<String, dynamic> toJson() => _$AuthResponseToJson(this);
}