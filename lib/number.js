// 将数字截断为给定的小数位数而不舍入
export const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

// toFixed(25.198726354, 1); // 25.1
// toFixed(25.198726354, 2); // 25.19
// toFixed(25.198726354, 3); // 25.198
// toFixed(25.198726354, 4); // 25.1987
// toFixed(25.198726354, 5); // 25.19872
// toFixed(25.198726354, 6); // 25.198726

// 在小数点处截断数字
export const truncate = (n) => ~~n;
// truncate(25.198726354); // 25
// truncate(-25.198726354); // -25

//计算参数的平均值
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;
// average(1, 2, 3, 4); // 2.5
