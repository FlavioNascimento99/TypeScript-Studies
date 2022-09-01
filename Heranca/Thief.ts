import { Creator } from "./Personagem";
import { Util } from "./Util";

export class Thief extends Creator{
     private _Stealth: number;

     constructor (name: string) {
          super(name)
          this._healthBar = Util.randomizer(20, 70);
          this._magickaBar = Util.randomizer(5, 30);
          this._vigorBar = Util.randomizer(45, 100);

          this._Stealth = Util.randomizer(10, 100)
     }

     public get stealth(): number {
          return this._Stealth;
     }

}