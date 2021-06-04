// --SNACK 2---
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var primaParola = prompt('inserisci la prima parola');
var secondaParola = prompt("inserisci un'altra parola");

if (primaParola.length > secondaParola.length){
    document.getElementById('output').innerHTML = secondaParola + ' ' + primaParola;
} else if (secondaParola.length > primaParola.length){
   document.getElementById('output').innerHTML = primaParola+ ' ' + secondaParola;
}