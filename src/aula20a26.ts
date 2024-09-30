class Conta{
    protected numero:number
    protected titular:string
    private saldoconta:number

    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
        this.saldoconta=0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }

    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Número.: ${this.numero}`)
    }

    get saldo():number{
        return this.saldoconta
    }

    protected deposito(valor:number){
        if(valor <0){
            console.log(`Valor inválido`)
            return
        }
        this.saldoconta+=valor
    }

    protected saque(valor:number){
        if(valor <0){
            console.log(`Valor inválido`)
            return
        }
        if(valor <= this.saldoconta){
            this.saldoconta-=valor
        } else {
            console.log(`Saldo insuficiente`)
        }
        
    }
}

interface Tributos{
    taxaCalculo:number;
    CalcularTrib(valor:number):number
}

class ContaPF extends Conta implements Tributos{
    taxaCalculo=10
    cpf:number
    constructor(cpf:number,titular:string){
        super(titular)
        this.cpf=cpf
    }
    CalcularTrib(valor: number):number{
        return valor*this.taxaCalculo
    }
    info(){
        console.log(`Tipo...:PF`)
        super.info
        console.log(`CPF....: ${this.cpf}`)
        console.log(`----------------------`)
    }
    public deposito(valor:number){
        if(valor>1000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        } else {
            super.deposito(valor)
        }
        
    }
    public saque(valor:number){
        if(valor>1000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        } else {
            super.saque(valor)
        }
        
    }

}

class ContaPJ extends Conta{
    cnpj:number
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj
    }
    info(){
        console.log(`Tipo...:PJ`)
        super.info
        console.log(`CNJP....: ${this.cnpj}`)
        console.log(`----------------`)
    }
    public deposito(valor:number){
        if(valor>10000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        } else {
            super.deposito(valor)
        }
        
    }
    public saque(valor:number){
        if(valor>10000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        } else {
            super.saque(valor)
        }
        
    }
}


const cont1=new ContaPF(111,"Pingo")
const cont2=new ContaPJ(111222,"Dumbao")

cont2.deposito(8000)
cont2.saque(2000)
console.log(cont2.saldo)