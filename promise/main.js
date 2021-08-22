/**
 * 1. pending
 * 2. fullfilled
 * 3. refect
 */

// var promise = new Promise(
//   // Executor
//   function (resolve, reject) {
//     // Thành công => resolve
//     // Thất bại => refect
//     // resolve([
//     //   {
//     //     id: 1,
//     //     name: 'Js'
//     //   }
//     // ]);
//     resolve();
//   }
// );
// promise
//   .then(function () {
//     return 1
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log();
//   })
//   .finally(function () {
//     console.log("done");
//   });

/**
 * Always success
 */
// var promise = Promise.reject();
// promise
//   .then(function () {
//     console.log("success");
//   })
//   .catch(function () {
//     console.log("fail");
//   });
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});
var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});

Promise.all([promise1, promise2]).then(function (result) {
  console.log(result[0].concat(result[1]));
});
