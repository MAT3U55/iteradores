const hobbies = ["dirigir carro", "jogar", "ouvir musica", "exercicio", "astronomia"];

const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5;
});

console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);


//desafio
const Zhobbies = ["dirigir carro", "jogar", "ouvir musica", "zaralhar", "astronomia"];
const zHobby = Zhobbies.find(function(hobby) {
    return hobby.includes('z');
});

console.log("Meu primeiro hobby com a letra 'z' é: " + zHobby);
