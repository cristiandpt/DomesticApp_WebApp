import 'package:dio/dio.dart' hide Headers;
import 'package:domestikapp_api/api-responses/AuthResponse.dart';
import 'package:domestikapp_api/api-responses/LoginRequest.dart';
import 'package:domestikapp_api/api-responses/RegisterRequest.dart';
import 'package:retrofit/retrofit.dart';

part 'retrofit-client.g.dart';

@RestApi(baseUrl: 'https://5d42a6e2bc64f90014a56ca0.mockapi.io/api/v1/')
abstract class RestClient {
  factory RestClient(Dio dio, {String baseUrl}) = _RestClient;

  @POST('/login')
  Future<AuthResponse> login({@Body() required LoginRequest login});

  @POST('/register')
  Future<AuthResponse> register({@Body() required RegisterRequest newUser});
}