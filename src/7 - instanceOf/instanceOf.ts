// @ts-ignore
// O operador instanceof testa se um objeto tem, em seu prototype, a função construtora.

const simpleStr = "This is a simple string";
const myString = new String();
const newStr = new String("String created with constructor");
const myDate = new Date();
const myObj = {};
// @ts-ignore
simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString instanceof String; // returns true
newStr instanceof String; // returns true
myString instanceof Object; // returns true

myObj instanceof Object; // returns true, despite an undefined prototype
({} instanceof Object); // returns true, same case as above

myString instanceof Date; // returns false

myDate instanceof Date; // returns true
myDate instanceof Object; // returns true
myDate instanceof String; // returns false

// But

console.log(typeof simpleStr === "string"); // returns true
