// Com any

let x: any;

x = 100;
x = "Luiz";
console.log(x + 14);

// Com unkown

let y: unknown;

y = 100;
y = "Luiz";

if (typeof y === "number") {
  console.log(y + 14);
}
