export const type = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

/*箭头函数es6---->es5 */
// export const checkType = (x) => {
//   const t = typeof x;
//   if (x === null) return 'null';
//   if (x !== 'object') return t;
//   const toString = Object.prototype.toString;
//   const innerType = toString.call(x).slice(8, -1);
//   const innerLowType = innerType.toLowerCase();
//   return innerLowType;
// };
