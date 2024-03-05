import 'dart:async';
import 'dart:convert' as convert;
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:path/path.dart';
import 'package:mime/mime.dart';

import 'package:flutter/services.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_proxy/shelf_proxy.dart';

abstract class Logger {
  void logOk(String path, String contentType);
  void logNotFound(String path, String contentType);
}

// Pass an instance of DebugLogger to view logs only in dev builds
class DebugLogger implements Logger {
  const DebugLogger();
  _log(String path, String contentType, int code) {
    if (!kReleaseMode) {
      debugPrint('GET $path – $code; mime: $contentType');
    }
  }

  logOk(String path, String contentType) {
    _log(path, contentType, 200);
  }

  logNotFound(String path, String contentType) {
    _log(path, contentType, 404);
  }
}

// Default logger which does nothing. Use DebugLogger if you want to view access logs in console
class SilentLogger implements Logger {
  const SilentLogger();

  @override
  logNotFound(String path, String contentType) {}

  @override
  logOk(String path, String contentType) {}
}

class AssetsCache {
  /// Assets cache
  static Map<String, ByteData> assets = {};

  /// Clears assets cache
  static void clear() {
    assets = {};
  }
}

class LocalAssetsServer {
  /// Server address
  final InternetAddress address;

  /// Optional server port (note: might be already taken)
  /// Defaults to 0 (binds server to a random free port)
  final int port;

  /// Assets base path
  final String assetsBasePath;

  final Directory? _rootDir;
  HttpServer? _server;

  final Logger logger;

  LocalAssetsServer({
    required this.address,
    required this.assetsBasePath,
    // Pass this argument if you want your assets to be served from app directory, not from app bundle
    Directory? rootDir,
    // TCP port server will be listening on. Will choose an available port automatically if no port was passed
    this.port = 0,
    this.logger = const SilentLogger(),
  }) : this._rootDir = rootDir;

  /// Actual port server is listening on
  int? get boundPort => _server?.port;

  /// Starts server
  Future<InternetAddress> serve({bool shared = false}) async {
    final server = await HttpServer.bind(this.address, this.port, shared: shared);
    server.defaultResponseHeaders.add('Access-Control-Allow-Origin', '*'); //允许跨域
    server.defaultResponseHeaders.add("Access-Control-Allow-Methods", '*'); //跨域预检请求时候允许的请求方式
    server.defaultResponseHeaders.add("Access-Control-Allow-Headers", "*"); //允许跨域自定义的请求头
    server.defaultResponseHeaders.add("Access-Control-Allow-Credentials", true); //如果服务器端的响应中未携带 Access-Control-Allow-Credentials: true ，浏览器将不会把响应内容返回给请求的发送者。
    server.defaultResponseHeaders.add("Access-Control-Max-Age", "3600"); //跨域时候预检周期，防止重复性预检

    server.listen(_handleReq);

    _server = server;

    return server.address;
  }

  Future<InternetAddress> serve1({bool shared = false}) async {
    final handler = proxyHandler('http://strategyv2-front.nmedia.space');
    final s = await shelf_io.serve(handler, this.address, this.port, shared: shared);

    configServer(s);
    _server = s;

    return s.address;
  }

  void configServer(HttpServer server) {
    // 这里设置请求策略，允许所有
    server.defaultResponseHeaders.add('Access-Control-Allow-Origin', '*');
    server.defaultResponseHeaders.add('Access-Control-Allow-Credentials', true);
    server.defaultResponseHeaders.add('Access-Control-Allow-Methods', '*');
    server.defaultResponseHeaders.add('Access-Control-Allow-Headers', '*');
    server.defaultResponseHeaders.add('Access-Control-Max-Age', '3600');
  }

  Future<void> stop() async {
    AssetsCache.clear();
    await _server?.close();
  }

  Future<String> getBodyContent(HttpRequest request) async {
    /**
     * Post方法稍微麻烦一点
     * 首先，request传送的数据时经过压缩的
     * index.html中设置了utf8，因此需要UTF8解码器
     * 表单提交的变量和值的字符串结构为：key=value
     * 如果表单提交了多个数据，用'&'对参数进行连接
     * 对于提取变量的值，可以自行对字符串进行分析
     * 不过也有取巧的办法：
     * Uri.queryParameters(String key)能解析'key=value'类型的字符串
     * Uri功能很完善，协议、主机、端口、参数都能简单地获取到
     * 其中，uri参数是用'?'连接的，例如：
     * http://www.baidu.com/s?wd=dart&ie=UTF-8
     * 因此，为了Uri类能正确解析，需要在表单数据字符串前加'?'
     */
    var encodingName = convert.Encoding.getByName("iso_8859-1");
    if (encodingName != null) {
      //    await utf8.decoder.bind(request).join("&"); //重点：dart2用的UTF8这里补鞥用需要用这种方式  ，另外这里要用ISO 8859 -1方式获取，要不然HttpClientRequest.write() 写入服务器时候无法转换字符，从而失败
      String strRaw = await encodingName.decoder.bind(request).join("&");
      //  print('-----------------体参数原始数据-------------------------------');
      return strRaw;
    }
    return "";
  }

  _handleReq(HttpRequest request) async {
    String path = request.requestedUri.path.replaceFirst('/', '');

    if (path == '') {
      path = 'index.html';
    }
    final name = basename(path);
    final mime = lookupMimeType(name);

    try {
      if (path.startsWith('front-api/')) {
        final value = await getBodyContent(request);
        print('value $value');
        // http://strategyv2-front.nmedia.space/front-api/
        HttpClient httpClient = new HttpClient();
        Uri url = Uri(scheme: 'http', host: 'strategyv2-front.nmedia.space', path: path);

        var proxyRequest = await httpClient.openUrl(request.method, url);
        request.headers.forEach((key, values) {
          proxyRequest.headers.add(key, values);
        });
        proxyRequest.write(value);

        var proxyResponse = await proxyRequest.close();
        String responseBody = await proxyResponse.transform(convert.utf8.decoder).join();
        print('responseBody: $responseBody');
        request.response
          //   ..headers.contentType = ContentType.json
          ..statusCode = proxyResponse.statusCode
          ..write(convert.jsonDecode(responseBody));

        httpClient.close();
      } else if (path.indexOf('://') >= 0) {
        // 正常请求，跳过
      } else {
        final data = await _loadAsset(path);
        request.response.headers.add('Content-Type', '$mime; charset=utf-8');
        request.response.add(data.buffer.asUint8List());
      }

      request.response.close();
      logger.logOk(path, mime.toString());
    } catch (err) {
      request.response.statusCode = 404;
      request.response.close();
      logger.logNotFound(path, mime.toString());
    }
  }

  Future<ByteData> _loadAsset(String path) async {
    if (AssetsCache.assets.containsKey(path)) {
      return AssetsCache.assets[path]!;
    }

    if (_rootDir == null) {
      ByteData data = await rootBundle.load(join(assetsBasePath, path));
      AssetsCache.assets[path] = data;
      return data;
    }

    final filePath = join(_rootDir!.path, path);
    print('filePath: $filePath');
    final f = File(filePath);
    return (await f.readAsBytes()).buffer.asByteData();
  }
}
