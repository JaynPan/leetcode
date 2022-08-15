// * The below code will print 5 5 5 5 5 at the same time, how to resolve it
// for(var i = 0; i < 5; i++) {
//   console.log(i);
// }

function promise (i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, 1000)
  })
}

async function timeoutLoop() {
  for(let i = 0; i < 5; i++) {
    console.log(await promise(i));
  }
}

timeoutLoop();