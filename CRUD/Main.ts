class Lista {

     // Atributos
     private _Nome: string
     private _Idade: Number
     private _Lista: Array <any> = []


     // Métodos
     public adicionarItem(nome: string, idade: number) {
          this._Nome = nome;
          this._Idade = idade;

          this._Lista.push(this._Nome, this._Idade)
     }

     public mostrarLista() {
          console.log(this._Lista)
     }
}

let user: Lista = new Lista();

user.adicionarItem("Flavio", 23)
user.adicionarItem("Nascimento", 27)
user.adicionarItem("Henrique", 22)
user.adicionarItem("Savio", 21)

user.mostrarLista()