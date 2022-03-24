// Primivite data types
// Number, string, boolean, null, undefined
// When you make a copy of a primitive copy, it's always a "real" copy, not a reference copy.
// Example:
const originalA = 10;
let b = originalA;
console.log("b is now a copy of originalA: ", b);
b = 6;
console.log("reassign b to 6: ", b);
console.log("originalA is still 10: ", originalA);
// it happened because its a copy of the original, not a reference copy

// Object data types (objects, arrays, functions, classes)
// These values are stored just once in the memory, and are referenced by their address (pointer).
// So if we try to do the same thing that we did above we will get different results.
// If we change b value it will also change the originalA value, because we are using the same address.
const originalObj = {
  name: "Devair",
};

let copyObj = originalObj;

copyObj.name = "João";

console.log("originalObj", originalObj);

// That's because we are using the same address. and it is called SHALLOW COPY
// It can be problematic because if we are dealing with a copied object and we change the value of the copied object,
// it will also change the value of the original object

// How to make a deep copy of a Object data type

// using Spread operator

const originalObj2 = {
  name: "Devair",
  city: "Curitiba",
  age: 24,
};

const copyObj2 = { ...originalObj2 };

// using Object.assign

const copyObj3 = Object.assign({}, originalObj2);

// Dealing with Nested objects

// Nested objects are objects that are inside other objects.
// And if you try to copy a nested object with spread operator it will create a shallow copy of the nested object

const restaurant = {
  foods: {
    main: "Pizza",
  },
};

let restaurantCopy = { ...restaurant };

restaurantCopy.foods.main = "Pasta";

// the copy changed the value of the original
console.log(restaurant.foods.main);

// how to make a deep copy of nested objects
let restaurantCopy2 = { foods: { ...restaurant.foods } };

// Making copy objects with stringify and parse

let restaurantCopy3 = JSON.parse(JSON.stringify(restaurantCopy));
