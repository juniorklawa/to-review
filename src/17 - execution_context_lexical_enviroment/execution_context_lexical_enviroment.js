// the first execution context is the global execution context and it has.
// 1. a global object
// 2. "this" (this === window === globalObject)

function global() {
  function printName() {
    return "John";
  }

  function findName() {
    return printName();
  }

  // if JS sees a "()" it will create a new execution context and it runs our code
  // also it creates a new lexical environment
  // so each function has its own scope (or which lexical envoriment is currently running)
  // with the available variables and functions
  function sayMyName() {
    return findName();
  }

  sayMyName();
}
