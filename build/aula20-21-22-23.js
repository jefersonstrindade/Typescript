"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        console.log(`Saldo insuficiente`);
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo...:PF`);
        super.info;
        console.log(`CPF....: ${this.cpf}`);
        console.log(`----------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo...:PJ`);
        super.info;
        console.log(`CNJP....: ${this.cnpj}`);
        console.log(`----------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
}
const cont1 = new ContaPF(111, "Pingo");
const cont2 = new ContaPJ(111222, "Dumbao");
cont1.deposito(500);
console.log(cont1.saldo());
