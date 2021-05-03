// chiedi il nome
var nome = prompt("Come ti chiami?");
console.log(nome);

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
var chilometri = prompt("Quanti km vuoi percorrere?");
console.log(chilometri);
// l'età del passeggero.
var eta = prompt ("Quanti anni hai?")
console.log(eta);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = 0.21 * chilometri;
console.log(prezzo);
// va applicato uno sconto del 20% per i minorenni
var scontoMin = (prezzo * 20)/100;

// va applicato uno sconto del 40% per gli over 65.
var scontoOver = (prezzo * 40)/100;

var risultato;
if( eta < 18) {
    console.log(risultato = prezzo - scontoMin);
} else if (eta > 65) {
    console.log(risultato = prezzo - scontoOver);
} else {
    console.log(risultato = prezzo);
}

var mex;
 if(eta < 18){
     mex = "Sconto Minori";
     console.log(mex);
     } else if(eta > 65){
     mex = "Sconto Over 65";
     console.log(mex);
 }else {
    mex = "Nessuno sconto";
    console.log(mex);
 }

var carrozza = Math.floor(Math.random()*8);

var min = 90000;
var max = 100000;
var codiceTreno = Math.floor((Math.random() * (max - min) + min));
console.log(codiceTreno);




// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// document.getElementById("spesa").innerHTML = "SPESA TOTALE " + (Math.round((risultato + Number.EPSILON)) * 100 / 100);
document.getElementById("person").innerHTML = nome;
document.getElementById("sconto").innerHTML = mex;
document.getElementById("carrozza").innerHTML = carrozza;
document.getElementById("cod_treno").innerHTML = codiceTreno;
document.getElementById("spesa").innerHTML =  "€ " + risultato.toFixed(2);



