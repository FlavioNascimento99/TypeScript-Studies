"use strict";
// Sintaxe padrão de Classe dentro de TypeScript e propriedades desta classe
class Lutador {
    // Seu escopo é (Nome da Propriedade, Tipo, e valor padrão (para quando não tiver sido passado nenhum atributo para aquela propriedade).
    // nome: String = "";
    // wins: Number = 0;
    // style: String = "";
    /*
    
    Construtor definido, aqui temos o valor padrão que será dado ao novo objeto criado a partir desta classe, assim por exemplo, quando criamos um objeto e não informamos-o seu nome, o retorno será "Não informado"
    
    Detalhe que aqui estou passando como parâmetro do contrutor o "Nome:String" isso faz com que o mesmo seja obrigatório.
    
    A partir do momento em que eu adiciono a necessidade de que seja passado um valor dentro de quaisquer que seja o atributo, a classe deverá ser chamada com o atributo preenchido. Algo tipo:
    
    
    const novoLutador = new Lutador('Anderson Silva')
    
    Detalhe que, no momento em que eu passo a obrigar que seja passado um nome por exemplo, tenho que informar dentro do construtor que, o atributo (this.nome = nome), fazendo com que o construtor entenda que o parâmetro nome será o valor do atributo this.nome.
    
    Também podemos passar todos os atributos direto dentro do escopo de parâmetros do construtor, sendo assim consequentemente, obrigatórios no momento em que chamamos a classe em questão (Sendo assim descartamos aquela atribuição de propriedades que fizemos anteriormente dentro da classe) com isso, dispensando a necessidade de passar os elementos como o this. dentro do mesmo.
         
    */
    constructor(nome, wins, style) {
        this.nome = nome;
        this.wins = wins;
        this.style = style;
    }
}
// Construtor padrão, chamando a variável e criando com o 'New Lutador()', sendo assim criamos um objeto, porém sem nenhuma propriedade
var r = new Lutador('Anderson Silva', 23, 'Striker');
// Maneira que estou utilizando para ter retorno do objeto.
console.log(`
     Registro do Lutador:
     Nome - ${r.nome}
     Wins - ${r.wins}
     Estilo de Combate - ${r.style}
`);
