// Fonction pour récupérer les données Json
// On récupère les données des photographes et les médias
async function getPhotographers() {
    
    const response = await fetch('./data/photographers.json')
    const data = await response.json()
    // console.log(data.photographers)
    // console.log(data.media)

    // On retourne les propriétés à appeler dans la fonction suivante
    return { profiles: data.photographers, medias: data.media }
}

// Fonction qui récupère le photographe en fonction de son id
async function getPhotographersById(id) {

    // On appelle les données du Json
    const photographers = await getPhotographers()
    // On recherche les id dans photographer
    const profileSelected = photographers.profiles.find(
        (photographer) => photographer.id === id
    )

    // On filtre photographerId dans médias 
    // find() retourne un seul objet
    const mediaSelected = photographers.medias.filter(
        (media) => media.photographerId === id
    )

    // console.log(mediaSelected)

    // console.log(profileSelected)

    return { profileSelected, mediaSelected }
}

// Fonction qui va créer l'article dans le DOM
function profile(data) {

    function createProfilePage() {

        // Création de l'élément et appel de la fonction
        const article = document.createElement('article')

        article.innerHTML = profileCard(data)

        return article
    }

    return { data, createProfilePage }

    // Fonction qui va afficher les données
    function profileCard(data) {
        const { name, city, country, tagline, portrait } = data
        return `  <div class="profile">
            <div class="infos_profil" tabindex="0">
            <h1>${name}</h1>
            </div>
            <div class="infos_profil_details" tabindex="0">
            <h2>${city}, ${country}</h2>
            <p class="tagline">${tagline}</p>
            </div>
            </div>
            <button class='contact_button' tabindex="0"  aria-label="Formulaire de contact, Contactez moi" id='openForm' >Contactez Moi</button>
            <img src="assets/photographers/${portrait}" alt="portrait du photographe ${name}" tabindex="0">
            `
    }
    
}

// Focntion qui va afficher les données dans la classe
async function displayDataProfile(photographer) {
    // Sélection du querySelector pour afficher les données
    const photographersSection = document.querySelector('.photograph-header')

    const photographerModel = profile(photographer)
    // Création des élements dans le DOM
    const userCardDOM = photographerModel.createProfilePage()
    if (photographersSection) photographersSection.appendChild(userCardDOM)
}

// Fonction qui va créer l'article dans le DOM
function galerieCard(data) {

    // Création de l'élément et appel de la fonction
    function createGalerie() {

        const article = document.createElement('article')

        // Ajout de la class pour la mise en forne
        article.classList.add('galerie')

        // dataset va enregistrer les médias suivant l'id
        article.dataset.id = data.id

        // console.log(data.id)

        article.innerHTML = mediaTemplate(data)

        return article
    }

    return { data, createGalerie }

    // Fonction qui va afficher les données
    function mediaTemplate(data) {
        const { image, title, likes, video } = data

        // Séparation selon image ou vidéo dans les médias
        if ((data = image)) {
            return ` 
            
                <img src="assets/images/${image}"  alt="photographie ${title}" tabindex="0"> 
            
            <div class="infos">
                <p aria-label="${title}">${title}</p>
                <p class="mediaLike" aria-label="${likes} coeur">${likes}<i class="fas fa-heart" tabindex="0" ></i></p>
            </div>
            `
        }
        if ((data = video)) {
            return ` <video controls tabindex="0"><source src="assets/images/${video}"></video>
                <div class="infos">
                    <p aria-label="${title}">${title}</p>
                    <p class="mediaLike" aria-label="${likes} coeur">${likes}<i class="fas fa-heart" tabindex="0" aria-label="coeur"></i></p>
                </div>
            `
        }
        
    }

}

// Fonction qui va afficher les médias dans la galerie suivant le profil
async function displayMedia(medias) {

    const galerie = document.querySelector('.galerie')
    
    // Pour chaque média, afficher suivant la fonction galerieCard
    medias.forEach((media) => {

        const galerieModel = galerieCard(media)
        const galerieDOM = galerieModel.createGalerie()
        
        galerie.appendChild(galerieDOM)
  })
  // mon tableau d'objet
  console.log(medias)
}
    
async function init() {
    // Récupèration des données des photographes dans l'url
    const params = new URLSearchParams(window.location.search)
    let photographId = params.get('id')
    let pIdNumber
    // Passage du string à number avec parseInt
    if (photographId) pIdNumber = parseInt(photographId)
    const { profileSelected, mediaSelected } = await getPhotographersById(pIdNumber)
    displayDataProfile(profileSelected)    
    displayMedia(mediaSelected)
    

    console.log(pIdNumber)
}

init()

 

