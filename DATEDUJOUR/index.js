"use strict";

const content = document.querySelector("#content");

//Créer une nouvelle date

const aujoudhui = new Date(); // ceci renvoie beaucoup d'information peu lisible

//Récupération des informations qui nous intéressent, avec utilisation de la méthode getDay
// -jour de la semaine
// -jour du mois
// -le mois
// -l'année

const jourDeLaSemaine = aujoudhui.getDay();
const jour = aujoudhui.getDay();
const mois = aujoudhui.getMonth();
const annee = aujoudhui.getFullYear();

//Tableau avec nom mois et jour
const dayNames = [];
dayNames[0] = "Dimanche";
dayNames[1] = "Lundi";
dayNames[2] = "Mardi";
dayNames[3] = "Mercredi";
dayNames[4] = "Jeudi";
dayNames[5] = "Vendredi";
dayNames[6] = "Samedi";

const monthNames = [];
monthNames[0] = "Janvier";
monthNames[1] = "Février";
monthNames[2] = "Mars";
monthNames[3] = "Avril";
monthNames[4] = "Mai";
monthNames[5] = "Juin";
monthNames[6] = "Juillet";
monthNames[7] = "Août";
monthNames[8] = "Septembre";
monthNames[9] = "Octobre";
monthNames[10] = "Novembre";
monthNames[11] = "Décembre";

//Mettre en relation les valeurs de la date et les tableaux, pour traduire automatiquement

const dayOfWeek = aujoudhui.getDay(); // ceci nous renvoi 1 (lundi)
const dayOfWeekTranslated = dayNames[dayOfWeek]; // on retrouve bien le lundi

const month = aujoudhui.getMonth();
const monthTranslated = monthNames[month];

content.innerHTML += `Nous somme le ${dayOfWeekTranslated} ${jourDeLaSemaine} ${monthTranslated}`;
