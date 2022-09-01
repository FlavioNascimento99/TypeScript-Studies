//  Definir Export antes da declaração da classe, tem o mesmo comportamento de ao fim do código, passar "export default".
 
export default class Lutador {
     constructor(
          private _nome: string,
          private _energia: number,
          private _ataque: number,
          private _defesa: number, 
     ){}
          
     public get nome() : string {
          return this._nome
     }

     public get energia() : number {
          return this._energia
     }

     public get ataque() : number {
          return this._ataque
     }

     public get defesa() : number {
          return this._defesa
     }

     public treinarSparring(): void {
          this._ataque += this.randomize(5)
          this._energia -= this.randomize(10)
          if (this._ataque > 100) {
               this._ataque = 0           
          }
     }

     public treinarReflexo(): void {
          this._defesa += this.randomize(10)
          this._energia -= this.randomize(10)
          if (this._defesa > 100) {
               this._defesa = 0           
          }
     } 

     public lutar(): number {
          let desgaste:number = this.randomize(100);
          this._energia -= desgaste;
          
          return this._energia
     }

     public descansar(tempoDescanso: number): number {
          let valorRecuperacao: number = tempoDescanso * this.randomize(10)
          
          if(this._energia > 100) {
               this._energia = 100
          }
          
          return valorRecuperacao;
     }

     public nocauteado(): boolean {
          return(this._energia < 0);
     }

     public status(): string {
               return(`
                    Ficha Tec. de  ${this.nome}
                    Ataque:        ${this.ataque.toFixed(1)}
                    Defesa:        ${this.defesa.toFixed(1)}
                    Energia Atual: ${this.energia.toFixed(1)}
               `)
          }

     private randomize(fator: number): number {
          return (Math.random() * fator)
     }
}