import { profile, galerieCard } from "../factories/profilesFactory.js";
import { bannerCardPrice, bannerLikes } from "../factories/bannerAndLikes.js";

// Fonction pour récupérer les données Json
// On récupère les données des photographes et les médias
async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  const data = await response.json();
  // console.log(data.photographers)
  // console.log(data.media)

  // On retourne les propriétés à appeler dans la fonction suivante
  return { profiles: data.photographers, medias: data.media };
}

// Fonction qui récupère le photographe en fonction de son id
async function getPhotographersById(id) {
  // On appelle les données du Json
  const photographers = await getPhotographers();
  // On recherche les id dans photographer
  const profileSelected = photographers.profiles.find(
    (photographer) => photographer.id === id
  );

  // On filtre photographerId dans médias
  // find() retourne un seul objet
  const mediaSelected = photographers.medias.filter(
    (media) => media.photographerId === id
  );

  // console.log(mediaSelected)

  // console.log(profileSelected)

  return { profileSelected, mediaSelected };
}

// Focntion qui va afficher les données dans la classe
function displayDataProfile(photographer) {
  // Sélection du querySelector pour afficher les données
  const photographersSection = document.querySelector(".photograph-header");

  const photographerModel = profile(photographer);
  // Création des élements dans le DOM
  const userCardDOM = photographerModel.createProfilePage();
  if (photographersSection) photographersSection.appendChild(userCardDOM);
}

// Fonction qui va afficher les médias dans la galerie suivant le profil
function displayMedia(medias) {
  const galerie = document.querySelector(".galerie");

  // Pour chaque média, afficher suivant la fonction galerieCard
  medias.forEach((media) => {
    const galerieModel = galerieCard(media);
    const galerieDOM = galerieModel.createGalerie();

    if (galerie) galerie.appendChild(galerieDOM);
  });
  // mon tableau d'objet
  console.log(medias);
}

// Fonction pour la bannière (Prix)
function bannerPrice(photographer) {
  const banner = document.querySelector(".price");

  // Mise en place de la fonction qui crée la bannière
  const bannerPhotograph = bannerCardPrice(photographer);
  // La constante qui contient les deux propriétés
  const bannerCardDOM = bannerPhotograph.getBannerPrice();
  if (banner) banner.appendChild(bannerCardDOM);
}

async function init() {
  // Récupèration des données des photographes dans l'url
  const params = new URLSearchParams(window.location.search);
  let photographId = params.get("id");
  let pIdNumber;
  // Passage du string à number avec parseInt
  if (photographId) pIdNumber = parseInt(photographId);
  const { profileSelected, mediaSelected } = await getPhotographersById(
    pIdNumber
  );
  displayDataProfile(profileSelected);
  displayMedia(mediaSelected);
  // Bannière
  bannerPrice(profileSelected);
  bannerLikes(mediaSelected);

  //   console.log(pIdNumber);
}

init();
