# シンプルな Web Worker サンプル

Web Worker は JavaScript にマルチスレッドをもたらす仕組みです。

JavaScript はシングルスレッドで動作します。

setTimeout や Promise などをマルチスレッドと見間違うことがあるかもしれませんが、これらの処理はキューに積まれてシングルスレッドで直列に実行されます（キューは１つではなく複数あるらしく実行順序は単純ではありませんが、言語仕様で定められているようです。実装がその通りになっているかはまた別の話です。参考：[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)）。

そのため１つの処理に長い時間を要する場合、その他の処理は待たされることになります。例えマルチコア CPU を使っていてもです。

Web Worker を使用することでマルチスレッドを自在に扱えるようになり、シングルスレッドの呪縛から逃れられるようになります。

2018/1 現在、ほとんどのブラウザがサポートしています。

 * 参考：[Can i use Web Worker](https://caniuse.com/#search=Web%20Worker)

## サンプル概要

このサンプルの Web Worker は、２つの値の足し算の結果を返すだけの単純なものです。

メインスレッドで以上の Web Worker を作成し、3 + 4 の結果を受け取り画面に表示します。

## 前提

* Google Chrome の場合、file:/// のアクセスでは動作しません。サーバにアップロードの上、http:// もしくは https:// でアクセスする必要があります。
* Firefox の場合、file:/// のアクセスでも動作しました。

## 動作確認方法

まずは以下のコマンドで必要なパッケージをインストールします。

    > npm install

次に以下のコマンドでコンパイルします。

    > npm run build

コンパイルが正常に終わったら以下のコマンドで Web サーバを起動します。
Web Worker を動かすには Web サーバ上のリソースとしてアクセスする必要があるためです。
file:/// のアクセスでは動く保証がありません。

    > npx http-server
    Starting up http-server, serving ./
    Available on:
      http://192.168.10.5:8080
      http://192.168.33.1:8080
      http://127.0.0.1:8080
    Hit CTRL-C to stop the server

サーバが起動したらブラウザでアクセスしてください。
