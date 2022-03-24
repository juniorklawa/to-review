// Criar um escopo para utilizar o namespace

namespace MeNomeSpace {
  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }
}

const pessoaDoNameSpace = new MeNomeSpace.PessoaDoNamespace("luiz");
console.log(pessoaDoNameSpace);
