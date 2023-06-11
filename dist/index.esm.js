/*!
 * xr-tool 0.0.1
 * Licensed under MIT
 */

import ' date-fns';
import _Array$from from '@babel/runtime-corejs2/core-js/array/from';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

// 数组操作

// 对象操作

// 字符串操作

// Url链接处理

/*检查es6---->es5 */
_Array$from('abc'); // ['a', 'b', 'c']

/**
 * 深拷贝
 * @param {*} source
 * @returns
 */
function clone(source) {
  var t = type(source);
  if (t !== 'object' && t !== 'array') {
    return source;
  }
  var target;
  if (t === 'object') {
    target = {};
    for (var i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]); // 注意这里
      }
    }
  } else {
    target = [];
    for (var _i = 0; _i < source.length; _i++) {
      target[_i] = clone(source[_i]); // 注意这里
    }
  }

  return target;
}
function checkType(x) {
  var t = _typeof(x);
  if (x === null) return 'null';
  if (x !== 'object') return t;
  var toString = Object.prototype.toString;
  var innerType = toString.call(x).slice(8, -1);
  var innerLowType = innerType.toLowerCase();
  return innerLowType;
}

export { clone, checkType };
