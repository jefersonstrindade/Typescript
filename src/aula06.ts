let numeros:number[]=[20,30,40];
//let numeros: Array<number|string>=[20,30,40,"Pingo"];
//let numeros:(number|string)[]=[20,30,40];
numeros.push(50);
numeros.unshift(10);
numeros.pop();
numeros.shift();
console.log(numeros);

let numero_ro:ReadonlyArray<number>=[100,200,300];
console.log(numero_ro);
