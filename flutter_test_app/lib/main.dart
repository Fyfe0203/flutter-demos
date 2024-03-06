/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-02-29 11:43:20
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-05 18:49:29
 * @FilePath: /flutter_test_app/lib/main.dart
 * @Description:
 *
 */
import 'dart:async';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

import 'local_assets_server.dart';

final InAppLocalhostServer localhostServer = InAppLocalhostServer(
  documentRoot: 'web',
  port: 8080,
  directoryIndex: 'index.html',
);

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(kDebugMode);
  }

  if (!kIsWeb) {
    // start the localhost server
    await localhostServer.start();
  }

  runApp(const MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final GlobalKey webViewKey = GlobalKey();

  InAppWebViewController? webViewController;
  InAppWebViewSettings settings =
      InAppWebViewSettings(isInspectable: kDebugMode, mediaPlaybackRequiresUserGesture: false, allowsInlineMediaPlayback: true, iframeAllow: "camera; microphone", iframeAllowFullscreen: true);

  String url = "";
  String targetUrl = 'http://localhost:8080';
//   String targetUrl = 'http://front.catmaster.club/';
//   String targetUrl = 'http://strategyv2-front.nmedia.space/';
  double progress = 0;

  @override
  void initState() {
    super.initState();
    // _initServer();
  }

  void _initServer() async {
    final server = LocalAssetsServer(
      address: InternetAddress.loopbackIPv4,
      proxyUrl: targetUrl,
    );

    var addr = await server.serve();
    setState(() {
      url = addr;
      print('url $url');
      _loadUrl(url);
    });
  }

  void _loadUrl(String url) {
    if (url.isNotEmpty) {
      webViewController?.loadUrl(urlRequest: URLRequest(url: WebUri(url)));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        // appBar: AppBar(title: const Text("Official InAppWebView website")),
        body: SafeArea(
            child: Column(children: <Widget>[
      Expanded(
        child: Stack(
          children: [
            InAppWebView(
              key: webViewKey,
              initialUrlRequest: URLRequest(url: WebUri(targetUrl)),
              initialSettings: settings,
              onWebViewCreated: (controller) {
                webViewController = controller;
                _loadUrl(url);
              },
              onConsoleMessage: (controller, consoleMessage) {
                if (kDebugMode) {
                  print(consoleMessage);
                }
              },
              onLoadStart: (controller, url) {
                print('onload start $url');
              },
              onLoadStop: (controller, url) {
                print('onload stop $url');
              },
              onReceivedError: (controller, request, error) {
                print(error);
              },
              onLoadResourceWithCustomScheme: (controller, request) async {
                final uri = request.url;
                print('uri ${uri.toString()}');

                return null;
              },
            ),
            progress < 1.0 ? LinearProgressIndicator(value: progress) : Container(),
          ],
        ),
      ),
    ])));
  }
}
