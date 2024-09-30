"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Coisas = void 0;
const Coisas = ["Corda", "Pilha", "Bateria", "Violao"];
exports.Coisas = Coisas;
class Pessoa {
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
class Objeto {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
exports.default = Pessoa;
