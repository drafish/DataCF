'use strict'

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

export function add (x, y) {
  return x + y
}

// 返回数组元素所在的位置，确定是否包含在里面
/**
 *@method indexOf
 *@parame arrayToSearch 查找的对象
 *@parame item 查找的元素
 *@return args  返回位置
 **/
export function indexOf (arrayToSearch, item) {
  if (Array.prototype.indexOf) {
    return arrayToSearch.indexOf(item)
  } else {
    for (var i = 0; i < arrayToSearch.length; i++) {
      if (arrayToSearch[i] === item) return i
    }
    return -1
  }
}
