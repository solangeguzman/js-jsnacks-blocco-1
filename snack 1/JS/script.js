// ---SNACK 1 
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


var numOne = parseInt(prompt("inserisci un numero"));
var numTwo = parseInt(prompt("inserisci il secondo numero"));

if (numOne > numTwo){
    document.getElementById('output').innerHTML = numOne;
} else{
    document.getElementById('output').innerHTML = numTwo;
}

console.log(numOne);
console.log(numTwo);