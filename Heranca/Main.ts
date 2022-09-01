import { Mage } from "./Mage";
import { Thief } from "./Thief";
import { Warrior } from "./Warrior";

let ladrao: Thief = new Thief("Mateuzin");
let gordo: Warrior = new Warrior("SavioQuixaba");
let viado: Mage = new Mage("LuanLimaaa");

console.log(`
     Thief (Ladrão)
     Name: ${ladrao.name}
     HP: ${ladrao.health.toFixed(1)}
     Magicka: ${ladrao.magicka.toFixed(1)}
     Vigor: ${ladrao.vigor.toFixed(1)}
     --------------------------------
     Mastery: ${ladrao.stealth.toFixed(1)}
`);

console.log(`
     Warrior (Enorme)
     Name: ${gordo.name}
     HP: ${gordo.health.toFixed(1)}
     Magicka: ${gordo.magicka.toFixed(1)}
     Vigor: ${gordo.vigor.toFixed(1)}
     --------------------------------
     Mastery: ${gordo.rage.toFixed(1)}
`);

console.log(`
     Mago (Maguinho Lixeira)
     Name: ${viado.name}
     HP: ${viado.health.toFixed(1)}
     Magicka: ${viado.magicka.toFixed(1)}
     Vigor: ${viado.vigor.toFixed(1)}
     --------------------------------
     Mastery: ${viado.inteligence.toFixed(1)}
`);