"use strict";
var Veiculos;
(function (Veiculos) {
    class Carros {
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        }
    }
    Veiculos.Carros = Carros;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.Carros("RelampagoMaqueen");
console.log(carro1.nome);
