"use strict";
//  Definir Export antes da declaração da classe, tem o mesmo comportamento de ao fim do código, passar "export default".
Object.defineProperty(exports, "__esModule", { value: true });
class Lutador {
    constructor(nome, energia, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    treinarSparring() {
        this.ataque += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if (this.energia < 0) {
            console.log("Estás muerto.");
        }
        else {
            if (this.ataque > 100) {
                this.ataque = 0;
            }
        }
    }
    treinarReflexo() {
        this.defesa += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.energia < 0) {
            console.log("Estás muerto.");
        }
        else {
            if (this.defesa > 100) {
                this.defesa = 0;
            }
        }
    }
    descansar() {
        this.energia += Math.random() * 12;
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    status() {
        console.log(`
                    Ficha Tec. de  ${this.nome}
                    Ataque:        ${this.ataque.toFixed(1)}
                    Defesa:        ${this.defesa.toFixed(1)}
                    Energia Atual: ${this.energia.toFixed(1)}
               `);
    }
}
exports.default = Lutador;
