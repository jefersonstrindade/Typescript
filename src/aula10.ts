//NULL - UNDEFINED - UNKNOWN
//NULL - Tipo nulo
//UNDEFINED - Tipo indefinido
//UNKNOWN - Tipo desconhecido

let qnome:string|null;
qnome="Pingo";
console.log(qnome);

let qnome2:any;
console.log(qnome2);

let qnome3:unknown=qnome; //unknown só pode ser atribuído em tipos unknown ou any
let vnum:any=qnome3;
console.log(vnum)

