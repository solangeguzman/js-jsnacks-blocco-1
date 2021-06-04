// --SNACK 7--
// Stampa le potenze di 2 fino a 1000.
var number;

for( x = 1; x <= 1000; x++) {
    number = Math.pow(2 , x);
    document.getElementById('output').innerHTML += "<br/>" + number;
}