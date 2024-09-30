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
    get saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular) {
        super(titular);
        this.taxaCalculo = 10;
        this.cpf = cpf;
    }
    CalcularTrib(valor) {
        return valor * this.taxaCalculo;
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
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
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
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPF(111, "Pingo");
const cont2 = new ContaPJ(111222, "Dumbao");
cont2.deposito(8000);
cont2.saque(2000);
console.log(cont2.saldo);
