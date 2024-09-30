const ysoma=(n:number[]):number=>{
    let s:number=0;
    n.forEach((e)=>{
        s+=e;
    })
    return s;
}

let numer:number[]=[10,20,30,10,50,70];
console.log(ysoma(numer))