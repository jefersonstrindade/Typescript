let dados={
    nome: "Dumbao",
    idade: 29,
    status: "Casada",

    ola:() => {console.log("Oi")},
    info:(p:string) =>{console.log(p)}
}

dados.nome= "Lurdinha";

console.log(typeof(dados));
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);