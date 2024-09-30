"use strict";
const ysoma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 10, 50, 70];
console.log(ysoma(numer));
