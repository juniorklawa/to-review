// com if
const body = document.querySelector("body");
if (body) {
  body.style.backgroundColor = "red";
}
// non null assertion
const body2 = document.querySelector("body")!;
body2.style.backgroundColor = "red";

// type assertion (remove o union com null e undefined e outros) só é possivel fazer com subtipos
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.backgroundColor = "red";

// se precisar de algo muito diference (nao recomendado), faz o unkown e dps para o tipo de desejado
const body4 = document.querySelector("body") as unknown as number;
console.log(body4 + 10)
