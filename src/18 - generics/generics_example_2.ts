// Arrays and Promises are Generics

const array: Array<number> = [1, 2, 3, 4, 5];

async function promiseAsync(): Promise<number> {
  return 1;
}

function minhaPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}

promiseAsync().then(console.log);
