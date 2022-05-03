// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// Passa o tipo na função
// podemos usar o extends para restringir o tipo do generic
// utilizando o "=" podemos passar um valor padrão para o generic
function useState<T extends number | string = string>() {
  // define o tipo da variavel declarada
  // poderia ser let state: string | number por exemplo
  // mas como passamos o tipo antes, "herdamos" o tipo aqui
  let state: T;

  function getState() {
    return state;
  }

  // mesma coisa da declaração do state
  function setState(newState: T) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<number>();
newState.setState(123);

// se chamarmos assim vai dar erro.
// newState.setState("123");

console.log(newState.getState());



