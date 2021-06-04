// --Snack 6--
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente attraverso un prompt.

var number = parseInt(prompt('Inserisci un numero'));
var cubo;
for( x = 1; x <= number; x++) {
    document.getElementById("output").innerHTML +=  "<br/>" + x;
    var cubo = Math.pow(x , 3);
    document.getElementById('output').innerHTML+= "<br/>" + cubo;
}
