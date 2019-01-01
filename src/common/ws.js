const ws = {}

ws.create = function (url, data) {
  const socket = new WebSocket(url)

  socket.onopen = function (event) {
    console.log('Connection open ...')
    if (data) {
      socket.send(data)
    }
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

  ws.socket = socket
  ws.url = url
}

ws.send = function (data) {
  if (ws.socket && ws.socket.readyState === WebSocket.OPEN) {
    ws.socket.send(data)
  } else {
    ws.create(ws.url, data)
  }
}

ws.close = function () {
  ws.socket && ws.socket.close && ws.socket.close()
}

ws.isSupported = function () {
  if (window.WebSocket !== undefined) {
    return true
  } else {
    return false
  }
}

module.exports = ws
