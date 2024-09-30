"use strict";
class Computador {
    constructor(nome, ram, cpu) {
        this.comp1 = new Computador("Rapidao", 24, 10);
        this.comp2 = new Computador("Carão", 32, 5);
        this.comp3 = new Computador("Gamer", 128, 10);
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
        console.log("------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade ${qtde}para o computador ${this.nome}não é permitida`);
        }
    }
}
