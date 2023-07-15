const xrTools = require('../../dist/xr-tool.min.js');

console.log(xrTools.clone({ a: 1 }));

const list = [
  { id: 1, name: '张三', age: 12 },
  { id: 1, name: '李斯', age: 12 },
  { id: 3, name: '王五', age: 13 },
];

const list2 = [
  { id: 1, name: '张三', age: 12 },
  { id: 2, name: '李斯', age: 12 },
  { id: 3, name: '王五', age: 14 },
];

const json = '⌚️哈哈啊阿拉蕾了';
const res = xrTools.isEmojiCharacter(json);
console.log('%c Line:12 🍒 res', 'font-size:18px;color:#ffffff;background:#6666FF', res);
