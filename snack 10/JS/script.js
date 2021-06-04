// --SNACK 10--
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// for
var result = 0;

for(i = 1;  i<= 5; i++){
    var num = parseInt(prompt("Scrivi un numero"));
    if (isNaN(num)){
    alert("inserisci 5 numeri")
    break;
}
result += num;
}
document.getElementById('output').innerHTML = result;

// while
var resultWhile= 0;
var x = 1;

while ( x <= 5){
    x++;
    var num = parseInt(prompt('Scrivi un numero'));
    if(isNaN(num)){
        alert('inserisci un numero');
        break;
    }
    resultWhile += num;
}
document.getElementById('output').innerHTML += "<br>" + resultWhile;