import { Creator } from "./Personagem";
import { Util } from "./Util";

export class Mage extends Creator{
     private _Inteligence: number;

     constructor (name: string) {
          super(name)
          this._healthBar = Util.randomizer(10, 75);
          this._magickaBar = Util.randomizer(45, 100);
          this._vigorBar = Util.randomizer(35, 80);

          this._Inteligence = Util.randomizer(10, 100)
     }

     public get inteligence(): number {
          return this._Inteligence;
     }

}