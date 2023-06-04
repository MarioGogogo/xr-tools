import { type } from './type.js';

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
