import { IEVersion } from './util'

export default class Ajax {
  constructor (options) {
    var ieVersion = IEVersion()

    var xhr
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()

      if ([8, 9].indexOf(ieVersion) > -1) {
        xhr = new window.XDomainRequest()
      }
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xhr.open(options.method, options.url)

    // 显示关闭withCredentials，这样就不会发送cookie
    xhr.withCredentials = false

    this.xhr = xhr
    this.ieVersion = ieVersion
  }

  header (headers) {
    if ([8, 9].indexOf(this.ieVersion) > -1) {
      this.headers = headers
    } else {
      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key])
      }
    }
  }

  send (data) {
    if (typeof data === 'object') {
      if (this.headers) {
        data.headers = this.headers
      }
      data = JSON.stringify(data)
    } else {
      data = null
    }

    var xhr = this.xhr
    return new Promise((resolve) => {
      xhr.send(data)

      if ([8, 9].indexOf(this.ieVersion) > -1) {
        xhr.onload = function () {
          resolve(xhr.responseText)
        }
      } else {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.responseText)
          }
        }
      }
    })
  }
}
