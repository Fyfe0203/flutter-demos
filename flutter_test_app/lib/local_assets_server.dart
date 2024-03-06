/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-05 16:37:14
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-05 17:28:25
 * @FilePath: /flutter_test_app/lib/local_assets_server.dart
 * @Description:
 *
 */
import 'dart:async';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_proxy/shelf_proxy.dart';

abstract class Logger {
  void logOk(String path, String contentType);
  void logNotFound(String path, String contentType);
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
  final String proxyUrl;

  /// Optional server port (note: might be already taken)
  /// Defaults to 0 (binds server to a random free port)
  final int port;

  HttpServer? _server;

  final Logger logger;

  LocalAssetsServer({
    required this.address,
    required this.proxyUrl,
    // Pass this argument if you want your assets to be served from app directory, not from app bundle
    Directory? rootDir,
    // TCP port server will be listening on. Will choose an available port automatically if no port was passed
    this.port = 0,
    this.logger = const SilentLogger(),
  });

  /// Actual port server is listening on
  int? get boundPort => _server?.port;

  Future<String> serve({bool shared = false}) async {
    final handler = proxyHandler(proxyUrl);
    final s = await shelf_io.serve(handler, address, port, shared: shared);

    configServer(s);
    _server = s;

    print('proxyUrl $proxyUrl');
    return 'http://${address.address}:$boundPort';
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
}
