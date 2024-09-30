function wsoma(...n:number[]){
    let s:number=0;
    for(let en of n){
        s+=en
    }
    
    //n.forEach((en)=>{
    //    s+=en;
    //})
    return s;
}

console.log(wsoma(10,50,60))