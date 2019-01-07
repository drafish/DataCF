// 唯一标示 uuid,pageSessionId
export function uuid () {
  return new Date().getTime() + '|' + random()
}

export function random () {
  let str = ''
  let len = 32
  for (let i = 0; i < len; i++) {
    str = str + 'x'
  }
  return str.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

// 绑定事件
export function addEvent (target, type, handler) {
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
export function removeEvent (target, type, handler) {
  if (target.removeEventListener) {
    target.removeEventListener(type, handler)
  } else {
    target.detachEvent('on' + type,
      function (event) {
        return handler.call(target, event)
      }, true)
  }
}

export function isSupportWs () {
  if (window.WebSocket !== undefined) {
    return true
  } else {
    return false
  }
}

export function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if(isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if(fIEVersion == 7) {
          return 7;
      } else if(fIEVersion == 8) {
          return 8;
      } else if(fIEVersion == 9) {
          return 9;
      } else if(fIEVersion == 10) {
          return 10;
      } else {
          return 6;//IE版本<=7
      }   
  } else if(isEdge) {
      return 'edge';//edge
  } else if(isIE11) {
      return 11; //IE11  
  }else{
      return -1;//不是ie浏览器
  }
}
