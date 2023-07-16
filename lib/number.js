// 将数字截断为给定的小数位数而不舍入
export const toFixed = (n, fixed) => {
  //整数
  if (Number.isInteger(n)) {
    const numString = n;
    const zeros = '.' + '0'.repeat(fixed);
    const result = fixed === 0 ? numString : numString + zeros;
    return result;
  } else {
    //非整数
    return ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
  }
};

// 在小数点处截断数字
export const truncate = (n) => ~~n;

//计算参数的平均值
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;
