// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context = window) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton');
  }
  context = context || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};
function foo() {}
function foo2() {}
const obj = {};
foo.mycall(foo2, 1, 2, 3, 4);
