interface curso{
    titulo:string;
    des:string;
    iniciarCurso?(teste:string):void;
}

interface cursoProg extends curso{
    aulas:number;
    maxAlunos:number;
}

interface cursoArtes extends curso{
    aulas:number;
    maxAlunos:number;
}


let curso1:cursoProg
let curso2:cursoProg
let curso3:cursoArtes


curso1={titulo:"Typescript",des:"Curso de Typescript", aulas:100,maxAlunos:50}
curso2={titulo:"Javascript",des:"Curso de Javascript", aulas:250,maxAlunos:80}
curso3={titulo:"C++",des:"Curso de C++", aulas:200,maxAlunos:100}

console.log(curso1)