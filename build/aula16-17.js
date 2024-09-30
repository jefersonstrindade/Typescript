"use strict";
class Computador {
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
const comp1 = new Computador("Rapidao", 24, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
