// JSnack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const arrayNumbers = [];
let sum = 0;

do {
    arrayNumbers.push(parseFloat(prompt('Inserisci un numero:')));
    sum +=arrayNumbers[arrayNumbers.length-1];
} while (sum < 50);

console.log(arrayNumbers, sum);