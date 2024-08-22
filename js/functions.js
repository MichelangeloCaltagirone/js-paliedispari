// Palindrome

// Funzione che restituisce un valore Booleano per controllare se una parola è palindroma o meno

function isPalindrome(word) {                                                      // 1 solo parametro, indicante la futura parola
    const palindrome = word == (word.split('').reverse().join('')) ? true : false; // ternario per produrre la variabile Booleana al risultato
    return palindrome;                                                             // ritorno il risultato(Booleano) a chi mi invoca
}



// isEven

// funzione per controllare se un dato numero è pari o meno

function isEven(num) {                         // 1 solo parametro, che sarà il futuro numero
    let even = num % 2 === 0 ? true : false;   // verifico il resto della divisione per 2 per decretare se è pari, e affido un Booleano al risultato
    return even;                               // ritorno il risultato(Booleano) a chi mi invoca
}


// Random Number

// Funzione per generare un numero intero arrotondato casuale tra un min e max(compresi)

function randomNum(min, max) {                                        // 2 parametri, che saranno i futuri numeri indicanti il min e max
    return Math.floor(Math.random() * (max - min + 1) + min);         // ritorno il risultato(numero) a chi mi invoca
}

