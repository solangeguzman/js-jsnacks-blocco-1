// --SNACK 12--
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var listName= ['Michael', 'Areli', 'Greis', 'Celeste'];
var listSurname=['Paz', 'Alegre', 'Guglielmino', 'Gutierrez'];
var listInvited=[];

while(listInvited.length < 3){
    var name = listName[Math.floor(Math.random() * listName.length)];
    var surName= listSurname[Math.floor(Math.random()* listSurname.length)];
    
    var invited = ('name') + ' ' + ('surName');
   
    if(!listInvited.includes(invited)){
      listInvited.push(invited)
      document.getElementById('output').innerHTML += "<li>" + invited + "</li>";
    }
}
