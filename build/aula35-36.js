"use strict";
const obj = {
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Preto",
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80];
const fcores = () => {
    return ["Verde", "Amarelo", "Azul", "Preto"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de Typescript";
let [...t] = texto.split(" ");
let [p1, p2, p3] = texto.split(" ");
console.log(nu1);
console.log(nu2);
console.log(nu3);
