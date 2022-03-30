// DEFAULT VALUES

function greet(name) {

  // default value for name
  name = name || "<Your name here>";

  // concatenating a string with a variable will coerse the variable to a string so its going to be "undefined"
  console.log("Hello " + name);
}

// when i call greet without a parameter, it will use the value that was assigned to the name variable
// when greet function was created in memory (undefined)
greet();
greet('Devair')

// if you want to add a default value in ES6 you can do this:
function modernGreet(name = "John") {
  console.log("Hello " + name);
}

modernGreet();

// Operators are functions that returns values.

// The || operator always returns the first value that can be coerced to true.
// So when you evaluate true || false, it will return true.
// But when you evaluate undefined || 'Hello', it will return 'Hello' because 'Hello' can be coerced to true.
