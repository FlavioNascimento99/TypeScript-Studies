import { Util } from "./Util";

export class Creator {
     protected _name: string;
     protected _healthBar: number;
     protected _magickaBar: number;
     protected _vigorBar: number; 


     // Uma maneira de definir que não desejo que minha classe seja possível de ser herdada, é declarando o construtor como privado.
     // private constructor(name: string){
     constructor(name: string){
          this._name = name;

          this._healthBar = Util.randomizer(10, 100);
          this._magickaBar = Util.randomizer(0, 100);
          this._vigorBar = Util.randomizer(30, 100);
     }

     public get name(): string {
          return this._name; 
     }

          
     public get health(): number {
          return this._healthBar; 
     }

          
     public get magicka(): number {
          return this._magickaBar; 
     }

          
     public get vigor(): number {
          return this._vigorBar; 
     }
}