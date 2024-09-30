function f_teste<T,U>(v:T,r:U):U{
    return r
}

console.log(f_teste<number,string>(10,"A"))
console.log(f_teste<string,number>("B",30))
console.log(f_teste<boolean,boolean>(true,false))

class C_teste<T>{
    valor:T
    constructor(valor:T){
        this.valor=valor
    }
}
const ct1=new C_teste<number>(80)

console.log(ct1.valor)