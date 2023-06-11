import { type } from './type.js';
import './date.js';
import './array.js';
import './object.js';
import './string.js';
import './url.js';

/*检查es6---->es5 */
Array.from('abc'); // ['a', 'b', 'c']

/**
 * 深拷贝
 * @param {*} source
 * @returns
 */
export function clone(source) {
  const t = type(source);
  if (t !== 'object' && t !== 'array') {
    return source;
  }

  let target;

  if (t === 'object') {
    target = {};
    for (let i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]); // 注意这里
      }
    }
  } else {
    target = [];
    for (let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]); // 注意这里
    }
  }
  return target;
}

export function checkType(x) {
  const t = typeof x;
  if (x === null) return 'null';
  if (x !== 'object') return t;
  const toString = Object.prototype.toString;
  const innerType = toString.call(x).slice(8, -1);
  const innerLowType = innerType.toLowerCase();
  return innerLowType;
}
