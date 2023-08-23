const hobbies = ["dirigir carro", "jogar bola", "ouvir musica", "exercicio", "astronomia"];

const allShort = hobbies.every(function (hobby) {
    return hobby.length < 15;
});
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);


//desafio
const Ahobbies = ["Dirigir Carro", "jogar bola", "ouvir musica", "exercicio", "astronomia"];

const minusculo = Ahobbies.every(function(hobby) {
    return /^[a-z]/.test(hobby);
});

console.log("Todos os meus hobbies começam com letras minúsculas? " + minusculo);
