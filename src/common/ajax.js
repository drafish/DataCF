const ajax = {}

function createXhr(method, url, headers, callback) {
    var xhr
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open(method, url)

    for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }

    // 显示关闭withCredentials，这样就不会发送cookie
    xhr.withCredentials = false;

    xhr.onreadystatechange = function () {//服务器返回值的处理函数，此处使用匿名函数进行实现
        if (xhr.readyState == 4 && xhr.status == 200) {
            typeof callback === 'function' && callback(JSON.parse(xhr.responseText))
        }
    }

    return xhr;
}

ajax.get = function (options) {
    var xhr = createXhr('GET', options.url, options.headers, options.callback)

    xhr.send()
}

ajax.post = function (options) {
    var xhr = createXhr('POST', options.url, options.headers, options.callback)

    xhr.send(JSON.stringify(options.params))
}

module.exports = ajax;