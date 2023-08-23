const hobbies = ["dirigir carro", "jogar bola", "ouvir musica", "exercicio", "astronomia", "viajar"];

const vHobby = hobbies.find(function (hobby) {
    return hobby[0] === 'v';
});

if (vHobby) {
    console.log("Meu hobby que começa com 'v' é: " + vHobby);
} else {
    console.log("Não tenho nenhum hobby que comece com 'v'.");
}


//desafio
const ahobbies = ["dirigir carro", "jogar bola", "ouvir musica", "exercicio", "astronomia"];

const hobbies8 = ahobbies.every(function (hobby) {
    return hobby.length > 8;
});

if (hobbies8) {
    console.log("Todos os meus hobbies têm mais de 8 letras.");
} else {
    console.log("Pelo menos um dos meus hobbies não tem mais de 8 letras.");
}
