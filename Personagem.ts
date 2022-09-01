//  Definir Export antes da declaração da classe, tem o mesmo comportamento de ao fim do código, passar "export default".
 
export default class Lutador {
     constructor(
          public nome: string,
          public energia: number,
          public ataque: number,
          public defesa: number, 
     ){}

     /*
          Important Dicks
          
          Vai ler dados dentro da classe = use parâmetros
          Vai imprimir dentro da classe = use retorno
      */

     treinarSparring(): void {
          this.ataque += Math.random() * 5;
          this.energia -= Math.random() * 10;
          if (this.ataque > 100) {
               this.ataque = 0           
          }
     }

     treinarReflexo(): void {
          this.defesa += Math.random() * 7;
          this.energia -= Math.random() * 10;
          if (this.defesa > 100) {
               this.defesa = 0           
          }
     } 

     lutar(): number {
          let desgaste:number = Math.random() * 100;
          this.energia -= desgaste;
          
          return this.energia
     }

     descansar(tempoDescanso: number): number {
          let valorRecuperacao: number = tempoDescanso * Math.random() * 25;
          
          if(this.energia > 100) {
               this.energia = 100
          }
          
          return valorRecuperacao;
     }

     nocauteado(): boolean {
          if (this.energia <= 0) {
               return true;
          } else {
               return false;
          }
     }

     status(): string {
               return(`
                    Ficha Tec. de  ${this.nome}
                    Ataque:        ${this.ataque.toFixed(1)}
                    Defesa:        ${this.defesa.toFixed(1)}
                    Energia Atual: ${this.energia.toFixed(1)}
               `)
          }
}