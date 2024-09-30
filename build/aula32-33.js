"use strict";
var Veiculos;
(function (Veiculos) {
    class Carros {
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
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
        get potencia() {
            return this.pot;
        }
    }
    class Motor {
        constructor(cilindros, pot, turbo) {
            this.pot = pot + (turbo ? turbo.potencia : 0);
            this.ligado = false;
            this.cilindros = cilindros;
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
