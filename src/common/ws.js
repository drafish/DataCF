export default class Ws {
  constructor (options) {
    const socket = new WebSocket(options.url)

    socket.onopen = function (event) {
      console.log('Connection open ...')
    }

    socket.onmessage = function (event) {
      console.log('Received Message: ' + event.data)
    }

    socket.onclose = function (event) {
      console.log('Connection closed.')
    }

    socket.onerror = function (event) {
      console.log('Connection error.')
    }

    this.socket = socket
    this.url = options.url
  }

  send (data) {
    this.socket.send(data)
  }

  close () {
    this.socket && this.socket.close && this.socket.close()
  }

  isOpen () {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      return true
    } else {
      return false
    }
  }
}
