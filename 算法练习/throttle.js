function throttle(fn, delay) {
  let timer = null;
  let prev = Date.now();
  return function (...args) {
    const remaining = delay - (Date.now() - prev);
    const context = this;
    if (remaining <= 0) {
      fn.apply(this, args);
      prev = Date.now();
      console.log('剩余时间');
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
        console.log('清除定时器');
      }, delay);
    }
  };
}
function foo(i) {
  console.log(i, 'throttle');
}
const func = throttle(foo, 100);
for (let i = 0; i < 1000000; i++) {
  func(i);
}
