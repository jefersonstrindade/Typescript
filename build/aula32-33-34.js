"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carros {
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carros {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carros {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), 2);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
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
    Motores.Turbo = Turbo;
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
const carro1 = new Veiculos.CarroEsportivo("SuperPingo", 3);
const carro2 = new Veiculos.CarroPopular("Popzin", 2);
console.log(`Nome....: ${carro1.meuNome}`);
console.log(`Cor.....: ${carro1.minhaCor}`);
console.log(`Potencia: ${carro1.minhaPotencia}`);
console.log(`Ligado..: ${carro1.estouLigado}`);
console.log("----------------------------------");
console.log(`Nome....: ${carro2.meuNome}`);
console.log(`Cor.....: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.minhaPotencia}`);
console.log(`Ligado..: ${carro2.estouLigado}`);
