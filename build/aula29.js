"use strict";
function f_teste(v, r) {
    return r;
}
console.log(f_teste(10, "A"));
console.log(f_teste("B", 30));
console.log(f_teste(true, false));
class C_teste {
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(80);
console.log(ct1.valor);
