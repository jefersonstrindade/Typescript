"use strict";
class Conta {
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const cont1 = new ContaPF(123456789, "Bruno");
const cont2 = new ContaPJ(123453159, "Dumbao");
console.log(cont1.titular);
console.log(cont2.titular);
