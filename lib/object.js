// 对象操作
/**
 * 深拷贝
 * @param {*} source
 * @returns
 */
import { type } from './type';

//浅拷贝对象
export const shallowCopy = (obj) => Object.assign({}, obj);

//对象是否相等
export const isSameObjectEqual = (...objects) => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
// isSameObjectEqual({ foo: 'bar' }, { foo: 'bar' }); // true
// isSameObjectEqual({ foo: 'bar' }, { bar: 'foo' }); // false

// 获取对象给定路径处的值
export const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);
// getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';

//从对象数组中提取属性的值
export const pluck = (objs, property) => objs.map((obj) => obj[property]);
/**
pluck(
    [
        { name: 'John', age: 20 },
        { name: 'Smith', age: 25 },
        { name: 'Peter', age: 30 },
    ],
    'name'
); // ['John', 'Smith', 'Peter']
 */

// 从键和值对创建对象
export const toObj = (arr) => Object.fromEntries(arr);
/**
toObj([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]); // { a: 1, b: 2, c: 3 }
 */

export const clone = (source) => {
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
};
