class eventBus {
  constructor() {
    this.events = this.events || new Map();
  }
  addListener(type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn);
    }
  }
  emit(type) {
    let handle = this.events.get(type);
    handle.apply(this, [...arguments].slice(1));
  }
}
const bus = new eventBus();
bus.addListener('sayHello', () => {
  console.log('hello');
});
bus.emit('sayHello');
