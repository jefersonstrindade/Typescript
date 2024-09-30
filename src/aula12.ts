function logar(user:string, pass:string):void{
    console.log(`User...: ${user}`);
    console.log(`Senha: ${pass}`);
}

logar('Pingo', '1234')


function somar(n1:number,n2:number):number{
    return n1+n2;
}

let n_res:string=somar(8,2).toString();
let res:number=somar(10,5)
console.log(res);
console.log(n_res);