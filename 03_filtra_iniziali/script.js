/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function cercaNomi (nomi, lettera) {
        let nomiTrovati = [];
    for (let index = 0; index < nomi.length; index++){
      
       
       if(nomi[index].charAt(0) === lettera){
        nomiTrovati.push(nomi[index])
       }
    
    }
    return nomiTrovati
}

// Invoca la funzione qui e stampa il risultato in console

console.log(cercaNomi(names, prompt("inserisci una lettera")))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]