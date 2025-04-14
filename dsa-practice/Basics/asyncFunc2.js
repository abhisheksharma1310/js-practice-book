/**
 * handle multiple async functions
 */

const myPromise1 = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
};

const myPromise2 = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
};

async function executeMypromise() {
  try {
    const promises = [myPromise1(6), myPromise2(6)];
    const [val1, val2] = await Promise.all(promises);
    console.log("val1: ", val1, "val2: ", val2);
  } catch (error) {
    console.log(error);
  }
}

executeMypromise();
