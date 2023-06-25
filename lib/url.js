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
