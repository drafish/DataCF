'use strict';

//扩展帮助方法*/
var util = {};

// 唯一标示 uuid,pageSessionId
util.uuid = function () {
    return new Date().getTime() + '|' + util.random();
};

util.random = function () {
    return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


//返回数组元素所在的位置，确定是否包含在里面
/**
 *@method indexOf
 *@parame arrayToSearch 查找的对象
 *@parame item 查找的元素
 *@return args  返回位置
 **/
util.indexOf = function (arrayToSearch, item) {
    if (Array.prototype.indexOf) {
        return arrayToSearch.indexOf(item);
    } else {
        for (var i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i] === item) return i;
        }
        return -1;
    }
};

module.exports = util;
