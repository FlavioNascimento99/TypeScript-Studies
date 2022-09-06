import prompt from "prompt-sync";
import Lista from "./Main"

let Objeto: Lista = new Lista;

let key = prompt();
let option: number = 0;

while(option != 4) {

     console.log("======================")
     console.log("|         Add        |")
     console.log("|         Rmv        |")
     console.log("|         Lst        |")
     console.log("|         Ext        |")
     console.log("======================")

     option = +key("Escolha: ")

     switch (option) {
          case 1:
               if(option == 1){ 
                    let nome = key("Nome: ")
                    let idade = key("Idade: ")                    

                    Objeto.adicionarItem(nome.toString(), +idade)
               }
               break;

          case 2:
               if(option == 2){ 
                    Objeto.excluirItem()
               }
               break;

          case 3:
               if(option == 3) {
                    Objeto.mostrarLista()
               }
               break;
     
     }
}

console.log("Adeus");
