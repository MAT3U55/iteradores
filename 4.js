const hobbies = ["dirigir", "correr", "jogar"]

const runningPosition = hobbies.findIndex(function (hobby) {
    return hobby === 'correr';
});
console.log("Correr está na posição: " + runningPosition);


//desafio
const yhobbies = ["dirigir", "correr", "jogar"]

const yrunningPosition = yhobbies.findIndex(function (hobby) {
    return hobby === 'dirigir';
});
console.log("dirigir esta na posição: " +yrunningPosition)