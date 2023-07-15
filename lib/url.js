// 将url参数转换为对象
export const urlParamToObj = (query) => Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});
/**
getUrlParams(location.search); // Get the parameters of the current URL
getUrlParams('foo=Foo&bar=Bar'); // { foo: "Foo", bar: "Bar" }
getUrlParams('foo=Foo&foo=Fuzz&bar=Bar'); // { foo: ["Foo", "Fuzz"], bar: "Bar" }
 */
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
