import { format } from 'date-fns';

// 是否是今日
export const isToday = (date) => {
  if (date.indexOf('-') > -1) {
    date = new Date(date);
  }
  return format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
};

//检查平台系统
export const isPlatformOS = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //判断是否是 android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判断是否是 iOS终端
  if (isAndroid) {
    return localStorage.setItem('client', 'Android');
  } else if (isIOS) {
    return localStorage.setItem('client', 'IOS');
  } else {
    return localStorage.setItem('client', 'PC');
  }
};
/**
 * 判断content可能是字符串还是是json对象
 * @param {*} str
 */
export const isJSON = (str) => {
  try {
    if (typeof JSON.parse(str) == 'object') {
      return true;
    }
  } catch (e) {}
  return false;
};

export const isPhone = (val) => {
  var patrn = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
  if (!patrn.test(val) || val === '') {
    return false;
  } else {
    return true;
  }
};
// 检验车牌号
export const isCarNum = (val) => {
  var patrn = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
  var patrn2 = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))$/;
  if (!patrn.test(val) && !patrn2.test(val)) {
    return false;
  } else {
    return true;
  }
};

// 判断输入框是否有表情
export function isEmojiCharacter(substring) {
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\u2600-\u2B55\u3030\u303D\u3297\u3299\uFE00-\uFE0F\u200D\u20D0-\u20FF\uFE0E-\uFE0F]/g;
  const hasEmoji = emojiRegex.test(substring);
  return hasEmoji;
}

//验证接口返回 是否正确
export const isAxiosOk = (data) => {
  if (data.code === 200) {
    return true;
  } else {
    return false;
  }
};

//是否是工作日
export const isWorkDay = (date) => {
  return (date = new Date()) => date.getDay() % 6 !== 0;
};

// 检查日期是否在2个日期之间
export const isBetweenDay = (date, min, max) => date.getTime() >= min.getTime() && date.getTime() <= max.getTime();

//检查是否只包含数字
export const isNumeric = (str) => !/[^0-9]/.test(str);
// isNumeric(2); // true
// isNumeric('23'); // true
// isNumeric('1.23'); // false

//只包含数字+字母  空格也不行
export const isAlphanumeric = (str) => /^[0-9A-Z]+$/i.test(str);
// isAlphanumeric('hello123'); // true
// isAlphanumeric('hello 123'); // false

// 检查数组中的所有项目是否相等
export const areEqual = (arr) => arr.length > 0 && arr.every((item) => item === arr[0]);
// areEqual([1, 2, 3, 4]); // false
// areEqual(['hello', 'hello', 'hello']); // true

//检查对象是否为空
export const isEmpty = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 检查值是否为 base64 编码
export const isBase64 = (value) => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);

// 检查值是否为 promise
export const isPromise = (obj) => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

//检查数组是否包含与某些条件匹配的值
export const isContainsArr = (arr, criteria) => arr.some((v) => criteria(v));
// contains([10, 20, 30], (v) => v > 25); // true
// contains([10, 20, 30], (v) => v > 100 || v < 15); // true
// contains([10, 20, 30], (v) => v > 100); // false

//检查年份是否为闰年
export const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

//检查所有数组元素是否都等于给定值
export const isAllSameEqual = (arr, value) => arr.every((item) => item === value);
// isEqual(['foo', 'foo'], 'foo'); // true
// isEqual(['foo', 'bar'], 'foo'); // false
// isEqual(['bar', 'bar'], 'foo'); // false

// 检查一个数组是否是其他数组的子集
export const isSubset = (a, b) => new Set(b).size === new Set(b.concat(a)).size;
// isSubset([1, 2], [1, 2, 3, 4]); // true
// isSubset([1, 2, 5], [1, 2, 3, 4]); // false
// isSubset([6], [1, 2, 3, 4]); // false

//检查浏览器黑暗模式
export const isDarkMode = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    return '在 Node.js 环境中运行,无法判断';
  }
};
