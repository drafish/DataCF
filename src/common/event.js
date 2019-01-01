const event = {}

// 绑定事件
event.on = function (target, type, handler) {
  if (target.addEventListener) {
    target.addEventListener(type, handler, false)
  } else {
    target.attachEvent('on' + type,
      function (event) {
        return handler.call(target, event)
      }, false)
  }
}

// 取消事件监听
event.remove = function (target, type, handler) {
  if (target.removeEventListener) {
    target.removeEventListener(type, handler)
  } else {
    target.detachEvent('on' + type,
      function (event) {
        return handler.call(target, event)
      }, true)
  }
}

module.exports = event
