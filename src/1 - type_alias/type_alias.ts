type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Branco";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: "João",
  salario: 1000_000,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {
    ...pessoa,
    corPreferida: cor,
  };
}

console.log(setCorPreferida(pessoa, "Vermelho"));
