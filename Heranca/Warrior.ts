import { Creator } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Creator{
     private _Rage: number;

     // O construtor da extensão da classe deve conter a mesma quantidade ou mais de parâmetros que o construtor dentro da super-classe(no nosso caso, de Personagem.ts), com isso em seguida declaramos "super(e seus parâmetros), que será o responsável por chamar o construtor "
     constructor (name: string) {
          super(name)
          this._healthBar = Util.randomizer(10, 100);
          this._magickaBar = Util.randomizer(0, 25);
          this._vigorBar = Util.randomizer(30, 95);

          this._Rage = Util.randomizer(10, 100)
     }

     public get rage(): number {
          return this._Rage;
     }

}