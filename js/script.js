
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

    // Fase di elaborazione dati
    // ternario per stampare in pagina. Passando la parola come argomento della funzione,
    // essa restituisce vero o falso, utili poi a stampare il messaggio corretto in pagina.

    if(isPalindrome(word)) result.innerText = 'Complimenti! Hai trovato una parola palindroma';  
    else result.innerText = "La parola inserita non è palindroma, provane un'altra";
    
    form.reset();  // Pulisco i campi del form
})