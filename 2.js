const hobbies = ["gumball"];

const bookTitles = hobbies.map(function(hobby) {
  return "O incrível mundo de " + hobby;
});

console.log(bookTitles);


//desafio
const bhobbies = ["dirigir carro", "jogar bola", "ouvir musica", "exercicio", "astronomia"];

const catalogo = bhobbies.map(function(hobby) {
    return "Livro sobre " + hobby;
});

console.log("Catálogo de livros baseado em hobbies:");
console.log(catalogo);
