// -- SNACK 5 --
// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

var lista = [];


for (var i = 1; i <=6; i++){
    var numero = parseInt(prompt('Scrivi un numero'));
    if (numero % 2 !== 0) {
        lista.push(numero);
    }
}

console.log(lista);