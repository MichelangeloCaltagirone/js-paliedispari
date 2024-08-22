
// Es 1: Scopriamo se una parola è palindroma

// Prep
/** -recupero elementi dal DOM
 *  -recupero dati dal form al click
 *  -controllo se è palindroma
 *  -stampo in pagina il risultato  
*/

// recupero elementi dal DOM

// Dove verrà stampato il risultato delle elaborazioni
const result = document.querySelector('span');
// Dove l'utente inserirà l'input testuale
const inputTextField = document.querySelector('input');
// Recupero anche il Form per resettarlo all'invio dei dati
const form = document.querySelector('form');

// Eventi Dinamici 

const button = document.querySelector('button').addEventListener('click', function(event){
    event.preventDefault();                                                                 // prevengo il ricaricamento della pagina al submit

    const word = inputTextField.value.toLowerCase().trim();    // al click recupero dal DOM il dato di interesse, preparandolo con dei metodi

    console.log(word);                                         // mostro in console la parola inserita dall'utente
    

    // Fase di elaborazione dati
    // ternario per stampare in pagina. Passando la parola come argomento della funzione,
    // essa restituisce vero o falso, utili poi a stampare il messaggio corretto in pagina.

    if(isPalindrome(word)) {
        result.innerText = 'Complimenti! Hai trovato una parola palindroma';        // Mostro risultato in: pagina
        console.log('Complimenti! Hai trovato una parola palindroma');              // Mostro risultato in: console 
    }     
    else {
        result.innerText = "La parola inserita non è palindroma, provane un'altra"; // Mostro risultato in: pagina  
        console.log("La parola inserita non è palindroma, provane un'altra");       // Mostro risultato in: console
    }
    
    form.reset();  // Pulisco i campi del form
})





// Es2 Pari o Dispari contro il PC
// Versione Console

/**
 * chiedo all'utente se punta su pari o dispari
 * chiedo all'utente il numero che sceglie tra 1 e 5
 * genero il numero per il pc
 * sommo i 2 numeri
 * verifico chi ha vinto
 * stampo il vincitore
 */

// Prep
const pcNum = randomNum(1, 5);    // l'unico dato che posso sapere già a monte

// recupero dati da utente
const userChoice = prompt('Vuoi puntare su Pari o su Dispari?').trim().toLowerCase();  // scelta utente
const userNum = parseInt(prompt('Inserisci un numero tra 1 e 5'));                     // numero utente
// Mostro in console i dati generati
console.log(userChoice,' :punatata utente');
console.log(userNum, " :numero scelto dall'utente");
console.log(pcNum, ' :numero scelto dal PC');

// Elaborazione dati

const sum = pcNum + userNum;              // Calcolo la somma
const even = isEven(sum);                 // Passo sum come argomento della funzione per controllare che sia pari o dispari

console.log('la somma è: ', sum);

// Fase di produzione output mediante un controllo di due variabili: la scelta dell'utente e il valore di ritorno della funzione isEven

if ((even && userChoice === 'pari') || (!even && userChoice === 'dispari')) console.log('Hai vinto tu, complimenti!');
else console.log('Ha vinto il PC. Non sei stato fortunato');

