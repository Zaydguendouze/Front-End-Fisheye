import { profile, galerieCard } from "../factories/profilesFactory.js";
import { bannerCardPrice, bannerLikes } from "../factories/bannerAndLikes.js";
import { lightbox } from "../factories/lightbox.js";

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

  // On filtre photographerId dans médias en utilisant une autre méthode
  // find() retourne un seul objet
  const mediaSelected = photographers.medias.filter(function (media) {
    return media.photographerId === id;
  });

  //   console.log(mediaSelected);

  //   console.log(profileSelected)

  return { profileSelected, mediaSelected };
}

// Focntion qui va afficher les données dans le header
function displayDataProfile(photographer) {
  // Sélection du querySelector pour afficher les données
  const photographersSection = document.querySelector(".photograph-header");

  const photographerModel = profile(photographer);
  // Création des élements dans le DOM
  const userCardDOM = photographerModel.createProfilePage();
  if (photographersSection) photographersSection.appendChild(userCardDOM);

  // Bouton pour l'ouverture du formulaire
  const btnForm = document.getElementById("contact_btn");
  if (btnForm)
    btnForm.addEventListener("click", () => {
      launchModal();
    });

  function launchModal() {
    const myModal = document.getElementById("contact_modal");

    if (myModal) {
      myModal.style.display = "block";
      myModal.style.backgroundColor = "rgba(255,255,255,0.8)";
    }
  }
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
}

const triPopularite = document.querySelector(".popularite");
const triDate = document.querySelector(".date");
const triTitre = document.querySelector(".titre");
const close = document.querySelector(".select_closeLabel");
const open = document.querySelector(".select_label");
const select = document.querySelector(".select");
const expand = document.querySelector(".select_expand");

open.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log(expand);
    openExpand();
  }
});

open.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    console.log(expand);
    closeExpand();
  }
});

function openExpand() {
  expand.style.display = "none";
}

function customSelect() {
  select.style.marginBottom = "140px";
}

function sortPopular(medias) {
  medias.sort((a, b) => {
    if (a.likes < b.likes) {
      return 1;
    }
    if (a.likes > b.likes) {
      return -1;
    }
    return 0;
  });
}

function sortDate(medias) {
  medias.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });
}

function sortTitre(medias) {
  medias.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
}

function sorts(medias) {
  triTitre.addEventListener("click", () => titleSelected());
  function titleSelected() {
    customSelect();
    triPopularite.textContent = "Titre";
    // triDate.textContent = "Popularité";
    triTitre.textContent = "Popularité";
    sortTitre(medias);
    const galerie = document.querySelector(".galerie");
    galerie.innerHTML = "";
    displayMedia(medias);
    lightbox(medias);
    bannerLikes(medias);
    console.log("test");
  }
  triTitre.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      titleSelected();
    }
  });
  triDate.addEventListener("click", () => dateSelected());
  function dateSelected() {
    customSelect();
    triPopularite.textContent = "Popularité";
    triDate.textContent = "Date";
    triTitre.textContent = "Titre";
    sortDate(medias);
    const galerie = document.querySelector(".galerie");
    galerie.innerHTML = "";
    displayMedia(medias);
    lightbox(medias);
    bannerLikes(medias);
  }
  triDate.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      dateSelected();
    }
  });
  triPopularite.addEventListener("click", () => popularSelected());
  function popularSelected() {
    // customSelect();
    triPopularite.textContent = "Popularité";
    triDate.textContent = "Date";
    triTitre.textContent = "Titre";
    sortPopular(medias);
    const galerie = document.querySelector(".galerie");
    galerie.innerHTML = "";
    displayMedia(medias);
    lightbox(medias);
    bannerLikes(medias);
  }
  triPopularite.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      popularSelected();
    }
  });
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
  // Lightbox
  lightbox(mediaSelected);
  // Sorts
  sorts(mediaSelected);

  //   console.log(pIdNumber);
}

init();
