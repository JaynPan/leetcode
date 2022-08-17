// Promise is a microtask and setTimeout is a macrotask
// And the microtasks will run before running the next macrotask.

// https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context/25933985#25933985

// macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
// microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver

setTimeout(() => {
  console.log('timeout');
}, 0)

Promise.resolve('crap').then((res) => {
  console.log(res)
}).then(() => {
  console.log('promise then');
})

console.log('sync')

// sync
// crap
// promise then
// timeout
