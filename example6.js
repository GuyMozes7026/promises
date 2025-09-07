const pr = new Promise(() => {
    throw new Error('failed');
})

pr
  .then((data) => console.log('success', data))
  .catch((err) => console.error('an error occurred', err));
