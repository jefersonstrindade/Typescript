"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
        console.log(`----------------------`);
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`);
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}`);
    }
}
const cont1 = new ContaPF(111, "Pingo");
const cont2 = new ContaPJ(111222, "Dumbao");
cont1.info();
