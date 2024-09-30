"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const cont1 = new ContaPF(111, "Bruno");
const cont2 = new ContaPJ(111222, "Dumbao");
console.log(cont1.titular);
console.log(cont1.numero);
