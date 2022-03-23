// um valor que nunca retorna nada

export function criaErro(): never {
  throw new Error("Uma mensagem de erro");
}
