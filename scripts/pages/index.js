import { photographFactory } from "../factories/photographersFactory.js";

async function getPhotographers() {
  // Récupèration des données Json et donc réponse
  const response = await fetch("./data/photographers.json");
  // Extraction des données
  const data = await response.json();
  // console.log(data.photographers)

  // Affichage des données extraites
  return { photographers: data.photographers };
}

function displayData(photographers) {
  // Sélection du querySelector pour afficher les données
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    // Appel de la class PhotographerFactory()
    const photographerModel = photographFactory(photographer);
    // Création des élements dans le DOM
    const userCardDOM = photographerModel.createPhotographeCard();
    if (photographersSection) photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupèration des données des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
