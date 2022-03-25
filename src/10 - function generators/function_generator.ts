// The purpose of generator is to return a value execute some code and return another value

function* simpleGenerator() {
  //   console.log("Before 1");
  yield 1;
  //   console.log("After 1");
  //   console.log("Before 2");
  yield 2;
  //   console.log("After 2");
  yield 3;
}

// the first time we invoke the generator, it just set up the generator project
const generatorObject = simpleGenerator();
// a new generator object is created
const generatorObject2 = simpleGenerator();

// generatorObject functions
// next
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());
// it returns { value: 1, done: false }
// value is the value that it is returning
// done is a boolean that tells if the generator is done or not
// console.log(generatorObject.next());

// USE CASES

// Infinite Loop

function* generateId() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

const generator = generateId();

// console.log(generator.next());
// console.log(generator.next());

// Iterator

function* myIterator(array: Array<number>) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const iteratorObj = myIterator([1, 2, 3, 4, 5]);

// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());

// Advanced properties

function* advanced() {
  let id = 1;
  while (true) {
    const increment: number = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const advancedGenerator = advanced();

// console.log(advancedGenerator.next());
// Everything we pass to next function will be the value that it will pass to the yield (only in the second time we call next)
// console.log(advancedGenerator.next(4));
// console.log(advancedGenerator.next());
// Exits the function generator
// console.log(advancedGenerator.return());
console.log(advancedGenerator.throw("Hi"));
