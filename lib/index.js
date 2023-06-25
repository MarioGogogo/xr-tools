/*检查es6---->es5 */
Array.from('abc'); // ['a', 'b', 'c']

/*可选链es6---->es5 */
let a = {
  x: 1,
};
if (a?.x) {
  console.log('a?x', a.x);
}

console.log(a?.y);

let x = 11,
  y;
console.log(y ?? 22);
