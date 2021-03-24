class Promise {
  callbacks = [];
  state = 'pending'; //增加状态
  value = null; //保存结果
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    if (this.state === 'pending') {
      this.callbacks.push(onFulfilled);
    } else {
      onFulfilled(this.callbacks);
    }
    return this;
  }
  _resolve(value) {
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach((fn) => fn(value));
  }
}
