// Criar um escopo para utilizar o namespace

namespace MeNomeSpace {
  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }
}

const a = new MeNomeSpace.PessoaDoNamespace("luiz");
console.log(a);
