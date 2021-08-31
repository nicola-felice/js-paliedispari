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



document.getElementById("verifyPalindrome").addEventListener('click', ()=> {

    let word = document.getElementById("word").value;

    // input validation
    if ( !isNaN(word) || word == "" ) {
        alert('ERRORE!! inserisci una parola');
        document.getElementById("word").value = "";
        return;
    }

    // check if the word is palindrome
    if (isPalindrome(word)) {
        alert('SI, la parola è palindroma');
    } else {
        alert('NO, la parola non è palindroma') 
    }    

    document.getElementById("word").value = "";
});
