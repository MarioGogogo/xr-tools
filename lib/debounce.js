//闭包 防抖
export function debounce(fn, delay) {
  var delay1 = delay || 200;
  var timer;
  return function () {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      console.log('间隔 :>> ');
      fn.apply(th, args);
    }, delay1);
  };
}
//节流
export function throttle(fn, interval) {
  var _self = fn,
    timer,
    firstTime = true;
  return function () {
    var args = arguments,
      _me = this;
    //如果是第一次调用不需要延迟执行
    if (firstTime) {
      _self.apply(_me, args);
      return (firstTime = false);
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 500);
  };
}
