const asyncFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();

      if (random < 0.5) {
        resolve();
      } else {
        reject(new Error("oops"));
      }
    }, 2000);
  });

asyncFunction().then(
  (data) => console.log("finished with", data),
  (error) => console.error("failed", error)
);

// or

asyncFunction()
  .then((data) => console.log("finished with", data))
  .catch((error) => console.error("failed", error));

const data0 = 0;

// bad

asyncFunction(data0).then((data1) => 
  asyncFunction(data1).then((data2) =>
    asyncFunction(data2).then((data3) =>
      asyncFunction(data3)
    )
  )
);

asyncFunction(data0)
  .then((data1) => asyncFunction(data1))
  .then((data2) => asyncFunction(data2))
  .then((data3) => asyncFunction(data3))
  .catch((error) => console.error('failed', error));

let asyncFunc1, asyncFunc2, asyncFunc3;

Promise.all([asyncFunc1(), asyncFunc2(), asyncFunc3()])
  .then(([data1, data2, data3]) => {
    console.log('got results', data1, data2, data3);
  });

