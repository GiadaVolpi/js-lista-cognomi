// array lista cognomi
var lista = ["Acuto", "Iacuzzi", "Ubaldi", "Cella", "Pirelli", "Demichelis", "Garibaldi", "Zaccagni", "Maccari", "Volpi", "Nannini", "Oberti", "Einaudi"];

// chiedo all'utente il cognome
var cognome = prompt ("Scrivi il tuo cognome");
// cognome con maiuscola iniziale:
// .charAt(0) prende la prima lettera
// .toUpperCase() rende maiuscola la prima lettera
// .slice(1) prende il cognome senza la prima lettera
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
console.log (cognome);
document.getElementById("cognome").innerHTML = cognome;

// inserisco il cognome dell'utente nella lista
lista.push (cognome);
console.log (lista);

// ordino alfabeticamente la lista di cognomi
lista.sort();

// dico al cliente in quale posizione si trova
var posizione = lista.indexOf(cognome) + 1;
console.log (posizione);
document.getElementById("posizione").innerHTML = posizione;
document.getElementById("sub-container").setAttribute("class", "visible");
