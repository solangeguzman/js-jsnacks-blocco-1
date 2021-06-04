// --SNACK 4 --
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var usuario = prompt('Inserisci il tuo nome');
var invitati= ['Andre', 'Marco', 'Stefania', 'Pablo',]
var flag= true;

for (var i = 0; i< invitati.lenght ; i++){
    if (usuario === invitati[i]){
        flag= false;
    }
}

if(flag){
    document.getElementById('output').innerHTML = "Sei nella lista!";

}else{
    document.getElementById('output').innerHTML = "Non sei nella lista!";
 
}

