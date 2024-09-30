class Computador{
    private id:number
    public nome:string;
    private ram:number;
    private cpu:number;
    protected ligado:boolean;


    constructor(nome:string,ram:number,cpu:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
        this.id=0;
    }

    info():void{
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado?"Sim":"Não"}`);
        console.log("------------------------")
    }

    ligar():void{
        this.ligado=true;
    }

    desligar():void{
        this.ligado=false;
    }

    
    upRam(qtde:number):void{
        if(qtde >= 0 && qtde <= 1000){
            this.ram=qtde
        } else{
            console.log(`Quantidade ${qtde}para o computador ${this.nome}não é permitida`);
    }


}

const comp1= new Computador("Rapidao",24,10);
const comp2= new Computador("Carão",32,5);
const comp3= new Computador("Gamer",128,10);

comp1.ligar();

comp1.info();
comp2.info();
comp3.info();