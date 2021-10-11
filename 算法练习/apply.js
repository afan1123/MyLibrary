Function.prototype.myApply = (context) => {
  if (typeof this !== 'function') {
    throw new TypeError('不是正确的类型');
  }
  context = context || window;
  context.fn = this;
  let result =
    [...arguments].length > 1 ? context.fn(...arguments[1]) : context.fn();
  delete context.fn;
  return result;
};
