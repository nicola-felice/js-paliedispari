// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function isPalindrome(word) {

    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    if (word == reversedWord) {
        return true;
    }

    return false;
}

let word = prompt('inserisci una parola');

if (isPalindrome(word)) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma')
}