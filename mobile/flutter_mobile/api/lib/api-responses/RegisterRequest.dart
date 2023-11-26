import 'package:json_annotation/json_annotation.dart';
part 'RegisterRequest.g.dart';

@JsonSerializable()
class RegisterRequest{
  @JsonKey(name: 'first_name')
  String jwtToken;
  @JsonKey(name: 'last_name')
  String refreshToken;
  @JsonKey(name: 'email')
  String email;
  @JsonKey(name: 'cellphone')
  String cellphone;
  @JsonKey(name: 'service_token')
  String serviceToken;

  RegisterRequest({
    required this.jwtToken,
    required this.refreshToken,
    required this.email,
    required this.cellphone,
    required this.serviceToken,
  });

  factory RegisterRequest.fromJson(Map<String, dynamic> json) => _$RegisterRequestFromJson(json);
  Map<String, dynamic> toJson() => _$RegisterRequestToJson(this);
}