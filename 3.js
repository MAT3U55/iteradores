const hobbies = ["comer", "dançar"];

const dHobbies = hobbies.filter(function (hobby) {
    return hobby[0] === 'd';
});

console.log(dHobbies);


//você tambem pode filtrar por quantidade de letras
const nhobbies = ["dirigir carro", "jogar bola", "ouvir musica", "exercicio", "astronomia"];

const tamanhoHobbies = nhobbies.filter(function(hobby) {
    return hobby.length > 10;
});

console.log("Hobbies com mais de 10 letras: ", tamanhoHobbies);
