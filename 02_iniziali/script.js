/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter (parola){
    let letters = [];
    for (let index = 0; index < parola.length; index++) {   
        letters.push(parola[index].charAt(0))   
    }
        return letters
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]