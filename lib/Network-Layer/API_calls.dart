import 'package:http/http.dart' as http;

abstract class NetworkCall {
  Future<String> getMsg();

  Future<String> postMsg();
}

class HttpNetworkCall implements NetworkCall {
  @override
  Future<String> getMsg() async {
    var uri = Uri.parse('https://jsonplaceholder.typicode.com/users');
    var response = await http.get(uri);
    print('Response status: ${response.statusCode}');
    print('Response body: ${response.body}');
    return response.body;
  }
  
  @override
  Future<String> postMsg() {
    // TODO: implement postMsg
    throw UnimplementedError();
  }
}