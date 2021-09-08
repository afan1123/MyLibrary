// 普通写法
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(100);
//   }, 1000);
// })
//   .then((res) => {
//     console.log(res, 'success');
//   })
//   .catch((error) => {
//     console.log(error, 'error');
//   });

// 多次异步调用
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(2);
//       }, 1000);
//     });
//   })
//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject('error');
//       }, 1000);
//     });
//   })
//   .then(() => {
//     console.log('end');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// then的第二参数
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('error');
//   }, 1000);
// }).then(
//   (res) => {
//     console.log(res);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// 链式调用
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1000);
//   }, 1000);
// })
//   .then((res) => {
//     console.log(res);
//     return Promise.resolve(res + 1000);
//   })
//   .then((res) => {
//     console.log('total:', res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1000);
//   }, 1000);
// })
//   .then((res) => {
//     console.log(res);
//     return res + 1000;
//   })
//   .then((res) => {
//     console.log('total:', res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.all

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('第一次请求');
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    resolve('第二次请求');
  }),
])
  .then((data) => {
    arr = data;
  })
  .catch((error) => {
    console.log(error);
  });
