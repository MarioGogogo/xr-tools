// 将url参数转换为对象
export const urlParamToObj = (url) => {
  let arrObj = url.split('?');
  const params = Object.create(null);
  if (arrObj.length > 1) {
    arrObj = arrObj[1].split('&');
    arrObj.forEach((item) => {
      const arr = item.split('=');
      params[arr[0]] = arr[1];
    });
  }
  return params;
};

//获取浏览器相关信息 获取浏览器名称  版本
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  const regex = /(\bChrome\b|\bSafari\b).*?\/([\d.]+)/;
  const match = userAgent.match(regex);
  const browserName = match[1];
  const browserVersion = match[2];
  return {
    browserName,
    browserVersion,
  };
};
