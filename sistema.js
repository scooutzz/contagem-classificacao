let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    if (contador == 0) {
        console.log("Número ZERO");
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é PAR");
    } else {
        console.log("O número " + contador + " é IMPAR");
    }
    
}
let i = 0
while (i <= numeroDeAlunos) {
    if(i === 0) {
        console.log("Número ZERO");
    } else if (i % 2 == 0) {
        console.log("O número " + i + " é PAR");
    } else {
        console.log("O número " + i + " é IMPAR");
    }
    
    i++;
}

let listaDeAlunos = ["Marcelo", "Cleber", "Juh", "Wesley", "Adriano"]

listaDeAlunos.forEach(aluno => {
    console.log(aluno);
});