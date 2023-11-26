class UserModel {
  final String _name;
  final int _age;
  final String? _email;

  UserModel ({
               required String name,
               required int age,
               String? email}
      ): _name = name, _age = age, _email = email;

  String get name => _name; // Getter for full name
  int get age => _age;
  String? get emailAddress => _email; // Getter for email address
}