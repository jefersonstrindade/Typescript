"use strict";
function logar(user, pass) {
    console.log(`User...: ${user}`);
    console.log(`Senha: ${pass}`);
}
logar('Pingo', '1234');
function somar(n1, n2) {
    return n1 + n2;
}
let n_res = somar(8, 2).toString();
let res = somar(10, 5);
console.log(res);
console.log(n_res);
