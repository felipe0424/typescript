/*
1. Crie uma classe produtos com dois atributos: nome e preco. Implemente um construtor de classe que receba o nome do produto e inicialize os atributos da classe.

Metodo alicarDesconto (percentual):

Implemente um metodo na classe produto que receba um argumento pecentual representando o desconto a ser aplicado sobre o preco do produto.
Dentro do método, calcule o novo preco aplicando o desconto fornecido.

MetodoExibir info():

Crie um metodo na classe produto chamado exibirInfo() que mostre no console uma string formada contendo o nome e preco atual do produto.
Formate o preço para exibir duas casas decimais.

Teste: 

Produto 1 = camiseta, 49,99
Produto2 = blusa, 59,90
Produto3 – short, 89,90
Percentual desconto para os 3 produtos é de 10%
*/
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco - (this.preco * (percentual / 100));
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
    }
}

let produto1 = new Produto('camiseta', 49.99);
let produto2 = new Produto('blusa', 59.90);
let produto3 = new Produto('short', 89.90);

produto1.exibirInfo();

let percentualDesconto = 10;

produto1.aplicarDesconto(percentualDesconto);
produto2.aplicarDesconto(percentualDesconto);
produto3.aplicarDesconto(percentualDesconto);

produto1.exibirInfo();
produto2.exibirInfo();  
produto3.exibirInfo();
