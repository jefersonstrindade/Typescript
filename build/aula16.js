"use strict";
class Computador {
    constructor() {
        this.nome = "Computador 1";
        this.ram = 0;
        this.cpu = 0;
        this.ligado = false;
    }
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = "Rapidao";
comp2.nome = "Carao";
comp3.nome = "Gamer";
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
