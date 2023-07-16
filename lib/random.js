//随机颜色
export const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

//随机uuid
export const randomUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// min max之间的随机个数组
export const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
