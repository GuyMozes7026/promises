// #region hide
const veryLongPromise = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 50000);
  });
};
// #endregion

const foo = async () => {
  await veryLongPromise();
  console.log('inside');
};

foo();
console.log('outside');
