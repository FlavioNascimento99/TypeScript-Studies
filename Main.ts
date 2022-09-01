import prompt from "prompt-sync";
import Lutador from './Personagem';

// Criação do objeto, passando seus atributos
let personagem: Lutador = new Lutador('Flavio', 100, 23, 12)


// Chamada da Lib PromptSync, responsável por trazer algo parecido com o input que temos em Python.
let key = prompt();

let option: number = 0;

while(option != 6 || personagem.nocauteado() == false){
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
               personagem.status()

               break;

          case 2: 
               personagem.treinarReflexo()
               personagem.status()

               break;
          
          case 3:
               let tempoDescanso: number = +key("Quanto tempo deseja descansar? ")

               personagem.descansar(tempoDescanso)
               personagem.status()

               break;
          
          case 4:
               let energiaRestante: number = personagem.lutar()
               console.log(`Esta luta lhe custou ${energiaRestante} pontos de energia.`);
               
               personagem.status() 
               break;

          case 5:
               personagem.status()
               break;
          
          default:

               break;
          
     }

}

console.log("Morreu.");
