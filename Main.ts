import prompt from "prompt-sync";
import Lutador from './Personagem';

// Criação do objeto, passando seus atributos
let personagem: Lutador = new Lutador('Flavio', 100, 23, 12)


// Chamada da Lib PromptSync, responsável por trazer algo parecido com o input que temos em Python.
let key = prompt();

let option: number = 0;


while(option != 6){
     console.log("================- CT -================")
     console.log("| 1 - Sparring             (+ Ataque)|")
     console.log("| 2 - Treino Reflexo       (+ Defesa)|")
     console.log("| 3 - Descansar                      |")
     console.log("| 4 - LUTAR!                         |")
     console.log("| 5 - Mostrar Atributos              |")
     console.log("| 6 - Sair                           |")
     console.log("======================================")

     option = +key("Escolha...")

     switch(option){

          case 1: 
               personagem.treinarSparring()
               break;

          case 2: 
               personagem.treinarReflexo()
               break;
          
          case 3: 
               personagem.descansar()
               break;
          
          case 4: 
          // A fazer
               break;

          case 5:
               personagem.status()
               break;
          
          default:

               break;
          
     }

}