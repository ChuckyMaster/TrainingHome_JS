"use strict";

/*************************************************
                   VARIABLES

************************************************/

let itemCourse = new Array();

/*************************************************
                  FUNCTION

************************************************/

//Ajout d'item dans le tableau "itemCourse"
function addItem(elem) {
  itemCourse.push(elem);

  displayShoppingList();
}

//Récupère la valeur et appelle "addItem"

function getValue() {
  let item = document.querySelector("#toAdd").value.toLowercase();
  addItem(item);
  document.querySelector("form").reset();
}

//Afficher le contenu de la liste et le nombre d'éléments dans la liste
function displayShoppingList() {
  //recupère la ul
  const UL = document.querySelector("ul");
  document.querySelector("h2").textContent =
    "la liste contient " + itemCourse.length + " produit(s)";

  UL.innerHTML = "";

  for (let item of itemCourse) {
    UL.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  }
}

displayShoppingList();

/**
 * MAIN CODE
 */
document.addEventListener("DOMcontentLoaded", function () {
  //gestionnaire sur le bouton qui permet l'ajout
  document.querySelector("#submit").addEventListener("click", addItem);
});
