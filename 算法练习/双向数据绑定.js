let obj = {};
let input = document.querySelector('input');
let span = document.querySelector('span');
Object.defineProperty(obj, {
  configureable: true,
  enumrable: true,
  get() {
    console.log('获取数据');
  },
  set(newVal) {
    input.value = newVal;
    span.innerText = newVal;
  },
});
input.addEventListener('keydown', (e) => {
  obj.value = e.target.value;
});
