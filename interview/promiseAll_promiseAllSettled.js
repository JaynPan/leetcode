// https://www.youtube.com/watch?v=Rs7ARD5TCFU&t=1s

// write a promise.all function
// while there is one promise reject, then reject whole promise

// The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected,
function promiseAllSettled(promises) {
  let result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((val) => {
          result[i] = val;
        })
        .catch((err) => {
          result[i] = err;
        })
        .finally(() => {
          count++;

          if (count === promises.length) {
            resolve(result);
          }
        });
    });
  });
}

function promiseAll(promises) {
  let result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((val) => {
          result[i] = val;
          count++;

          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          // The promise.all() method will reject with this first rejection message / error.
          reject(err);
        });
    });
  });
}

const promise1 = Promise.resolve(2);
const promise2 = Promise.resolve("hello world");
// const promise3 = Promise.reject("something went wrong!!");
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error!!");
  }, 400);
});
promiseAll([promise1, promise4, promise2])
  .then((val) => {
    console.log("all", val);
  })
  .catch(console.log);

promiseAllSettled([promise1, promise4, promise2]).then((val) => {
  console.log("all settled", val);
});
