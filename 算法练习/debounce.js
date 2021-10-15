function debounce(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
}
function foo() {
  console.log('防抖');
}
const func = debounce(foo, 1000);
for (let i = 0; i < 100; i++) {
  func();
}
