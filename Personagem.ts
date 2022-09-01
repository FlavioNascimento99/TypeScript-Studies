//  Definir Export antes da declaração da classe, tem o mesmo comportamento de ao fim do código, passar "export default".
 
export default class Lutador {
     constructor(
          public nome: string,
          public energia: number,
          public ataque: number,
          public defesa: number
     ){}

     treinarSparring(): void {
          this.ataque += Math.random() * 5;
          this.energia -= Math.random() * 10;
          if(this.energia < 0){
               console.log("Estás muerto.");
          } else {
               if (this.ataque > 100) {
                    this.ataque = 0 
               }
          }
     }

     treinarReflexo(): void {
          this.defesa += Math.random() * 7;
          this.energia -= Math.random() * 10;
          if(this.energia < 0){
               console.log("Estás muerto.");
          } else {
               if (this.defesa > 100) {
                    this.defesa = 0
               }
          }
     } 

     descansar(): void {
          this.energia += Math.random() * 12;
          if(this.energia > 100) {
               this.energia = 100
          }
     }

     status(): void {
               console.log(`
                    Ficha Tec. de  ${this.nome}
                    Ataque:        ${this.ataque.toFixed(1)}
                    Defesa:        ${this.defesa.toFixed(1)}
                    Energia Atual: ${this.energia.toFixed(1)}
               `)
          }
}