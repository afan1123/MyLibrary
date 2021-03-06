// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton');
  }
  context = context || window;
  context.fn = this;
  console.log(this);
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  console.log(context.fn);
  delete context.fn;
  return result;
};
function foo() {}
function foo2() {}
const obj = {};
foo.mycall(foo2);
