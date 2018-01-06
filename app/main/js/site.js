if (window.Worker) {
    result.innerHTML += '<li>Worker を作成します。</li>';

    const worker = new Worker("./js/worker.js");

    result.innerHTML += '<li>Worker にメッセージを送信します。</li>';
    worker.postMessage([3, 4]);

    worker.onmessage = function (e) {
        result.innerHTML += `<li>Worker からメッセージを受信しました。: ${e.data}</li>`;
    }
} else {
    result.innerHTML += '<li>SharedWorker は未サポートです。</li>';
}
