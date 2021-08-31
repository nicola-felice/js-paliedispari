// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(num) {

    if (num % 2 == 0) {
        return true;
    }
    return false;
}
  


let pariODispariUtente = prompt('inserisci (pari) o (dispari)');

let numeroUtente = parseInt(prompt('inserisci un numero tra 1 e 5'));

let numeroCPU = getRandomArbitrary(1, 5);

// print the result
if ( isEven(numeroCPU + numeroUtente) && pariODispariUtente == "pari" ) {

    alert(`PARI!! hai vinto, i due numeri erano TU(${numeroUtente}) CPU(${numeroCPU})`);

} else if ( !isEven(numeroCPU + numeroUtente) && pariODispariUtente == "dispari" ) {

    alert(`DISPARI!! hai vinto, i due numeri erano TU(${numeroUtente}) CPU(${numeroCPU})`);

} else if (isEven(numeroCPU + numeroUtente)) {

    alert(`PARI!! hai perso, i due numeri erano TU(${numeroUtente}) CPU(${numeroCPU})`);

} else {

    alert(`DISPARI!! hai perso, i due numeri erano TU(${numeroUtente}) CPU(${numeroCPU})`);
}

