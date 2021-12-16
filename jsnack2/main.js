// JSnack 2
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

let N = parseInt(prompt('Inserisci un numero intero positivo:'));

for (let i = 0; i < N; i++) {
    const arreyN = [];
    for (let j = 0; j < 10; j++) {
        arreyN.push(Math.floor(Math.random()*100+1));
    }
    console.log(arreyN);
}