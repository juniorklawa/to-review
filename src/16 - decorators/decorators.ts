// A decorator is a "impostor" object
// that wraps an object and adds functionality to it.

// "Man-made" class decorator
@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(value: string) {
      return value.split("").reverse().join("");
    }
  };
}
// Manual class decorator
// const AnimalDecorated = decorator(Animal);
// const animal = new AnimalDecorated("Devair", "roxo");

// Typescript Class decorator
const animal = new Animal("Devair", "roxo");

console.log(animal);
