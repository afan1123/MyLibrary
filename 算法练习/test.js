// setTimeout(() => {
//   console.log('setTimeout1');
//   Promise.resolve().then((data) => {
//     console.log(222);
//   });
// }, 100);

// console.log(333333);

// setTimeout(() => {
//   console.log('setTimeout2');
// }, 0);

// Promise.resolve().then((data) => {
//   console.log(111);
// });
// console.log(1);

console.log(1);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
  //   setTimeout(() => {
  //     console.log(12345);
  //   });
});
new Promise((resolve, reject) => {
  console.log(4);
  resolve();
}).then(() => {
  console.log(5);
});
setTimeout(() => {
  console.log(6);
});
console.log(7);
