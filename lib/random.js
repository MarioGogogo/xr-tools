//随机颜色
export const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

//随机uuid
export const uuid = (a) => (a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid));

// min max之间的随机个数组
const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
