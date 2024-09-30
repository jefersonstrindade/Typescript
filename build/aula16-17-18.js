"use strict";
class Computador {
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
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
}
const comp1 = new Computador("Rapidao", 24, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();
