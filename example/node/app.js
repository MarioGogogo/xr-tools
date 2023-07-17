const xrTools = require('../../dist/xr-tool.min.js');
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

const json = '⌚️哈哈😄字符串';
const date = new Date();
const min = '2022-12-31';
const max = '2023-07-18';
const res = xrTools.isBetweenDay(date, min, max);
console.log('%c Line:12 🍒 res', 'font-size:18px;color:#ffffff;background:#6666FF', res);
