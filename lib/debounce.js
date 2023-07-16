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

//等待一段时间
export const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

//按顺序运行承诺
export const run = (promises) => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));

// run(promises).then((results) => {
//   // `results` is an array of promise results in the same order
// });

//执行一次函数
export const once = (fn) =>
  (
    (ran = false) =>
    () =>
      ran ? fn : ((ran = !ran), (fn = fn()))
  )();

//   let n = 0;
// const incOnce = once(() => ++n);
// incOnce(); // n = 1
// incOnce(); // n = 1
// incOnce(); // n = 1
