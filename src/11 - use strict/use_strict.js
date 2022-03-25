// makes javascript more strict, more picker (implement some extra rules)
// "use strict";

// let person;

// persom = {};

// console.log(persom);
// console.log(person);

// you can use it inside a function instead of using it globally
function logNewPerson() {
  "use strict";
  let person;

  persom = {};

  console.log(persom);
  console.log(person);
}
logNewPerson();

// why not use it everytime?
// because it is not a good practice, but it can be useful.
// because when you transpile or minify your code it will be applied to all the code, and that can be a problem.
