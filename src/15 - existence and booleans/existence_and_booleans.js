// Existence and boolean

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false

// If it implies a lack of existence, it will return false.

var a;
// a = "hi";
// if will coerse a value to a boolean
if (a) {
  console.log("a is defined");
}

// Boolean of zero is false
console.log(Boolean(0)); // false

// but zero is not necessarily a "lack" of existence it can be something valid

var b = 0;

// Trick
// === (strict quality) has a higher precedence than || so it will be evaluated first
if (b || b === 0) {
  // it will coerse b to a boolean so
  // (b || true)
  // (false || true) - Because Boolean(0) will return false
  // So the evaluation will return true
  console.log("b is defined");
}
