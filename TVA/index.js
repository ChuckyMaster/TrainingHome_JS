"use strict";

const content = document.querySelector("#content");

let montantHT = parseInt(prompt("entrer un montant HT!"));
let TVA = parseInt(prompt("entrer un montant TVA")) / 100;

let montantTVA = montantHT * TVA;
let montantTTC = montantHT + montantTVA;

content.innerHTML += `<p> vous avez choisi ${montantHT} € en montant HT`;
content.innerHTML += `<p> vous avez choisi ${TVA} % en TVA`;
content.innerHTML += `<p> Le resultat est ${montantTTC} € en TTC`;
