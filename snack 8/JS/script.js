// --Snack 8--
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var number = prompt('inserisci un numero di 4 cifre');
 
if (number.length !==4) {
   alert('deve contenere 4 cifre');
}else if(isNaN(number)){
   alert('devi inserire un numero')
}else{
    var sum= parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]) + parseInt(number[3]);
}


console.log(sum);