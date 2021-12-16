// JSnack 3
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const arrayNumbers = [];

for (let i = 0; i < 40; i++) {
    arrayNumbers.push(i); 
}
console.log(arrayNumbers);

const mainAddress = document.querySelector('main');

const elementDivRed = document.createElement('div');
elementDivRed.id = 'red';

const elementDivGreen = document.createElement('div');
elementDivGreen.id = 'green';

let oddNumber = '';
let evenNumber = '';

for (let i = 0; i < arrayNumbers.length; i++) {

    if (arrayNumbers[i] % 2) {
        oddNumber += arrayNumbers[i] + ' - ';
    }else {
        evenNumber += arrayNumbers[i] + ' - ';
    }
}

elementDivRed.innerHTML = oddNumber.substring(0, oddNumber.length-3);
elementDivGreen.innerHTML = evenNumber.substring(0, evenNumber.length-3);

mainAddress.append(elementDivRed, elementDivGreen);
