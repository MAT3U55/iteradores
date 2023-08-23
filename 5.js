const hobbies = ["dirigir carro, ", "jogar bola, ", "ouvir musica, ", "exercicio e ", "astronomia"];

const allHobbies = hobbies.reduce(function (accumulator, hobby) {
    return accumulator + "" + hobby;
}, "");

console.log("Meus hobbies são: " + allHobbies);


//desafio
const phobbies = ["dirigir carro, ", "jogar bola, ", "ouvir musica, ", "exercicio e ", "astronomia"];

const frase = phobbies.reduce(function(acumulador, hobby) {
    return acumulador + "adoro também " + hobby;
});

console.log(frase + ".");