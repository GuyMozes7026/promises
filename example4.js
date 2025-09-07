const fail = () => Promise.reject(new Error('failed'));

const main = async () => {
  try {
    await fail();
  } catch (e) {
    console.log("caught the error");
  }
};

main();
