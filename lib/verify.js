//检查平台系统
export const platformOS = () => {
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
  for (var i = 0; i < substring.length; i++) {
    const hs = substring.charCodeAt(i);
    if (hs >= 0xd800 && hs <= 0xdbff) {
      if (substring.length > 1) {
        const ls = substring.charCodeAt(i + 1);
        var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
        if (uc >= 0x1d000 && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (substring.length > 1) {
      const ls = substring.charCodeAt(i + 1);
      if (ls === 0x20e3) {
        return true;
      }
    } else {
      if (hs >= 0x2100 && hs <= 0x27ff) {
        return true;
      } else if (hs >= 0x2b05 && hs <= 0x2b07) {
        return true;
      } else if (hs >= 0x2934 && hs <= 0x2935) {
        return true;
      } else if (hs >= 0x3297 && hs <= 0x3299) {
        return true;
      } else if (hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030 || hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b || hs === 0x2b50) {
        return true;
      }
    }
  }
}
