// Palindrome

// Funzione che restituisce un valore Booleano per controllare se una parola è palindroma o meno

function isPalindrome(word) {                                                      // 1 solo parametro, indicante la futura parola
    const palindrome = word == (word.split('').reverse().join('')) ? true : false; // ternario per produrre la variabile Booleana al risultato
    return palindrome;                                                             // ritorno il risultato(Booleano) a chi mi invoca
}