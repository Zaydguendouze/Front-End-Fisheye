// Fonction pour récupérer les données Json
// On récupère les données des photographes et les médias
async function getPhotographers() {

    const response = await fetch('./data/photographers.json')
    const data = await response.json()
    // console.log(data.photographers)
    // console.log(data.media)

    return { profiles: data.photographers, medias: data.media }
}

// Fonction qui récupère le photographe en fonction de son id
async function getPhotographersById(id) {

    const photographers = await getPhotographers()
    const profileSelected = photographers.profiles.find(
        (photographer) => photographer.id === id
    )

    console.log(profileSelected)

    return { profileSelected }
}

// Fonction qui va créer l'article dans le DOM
function profile(data) {

    function createProfilePage() {

        const article = document.createElement('article')

        article.innerHTML = profileCard(data)

        return article
    }

    return { data, createProfilePage }

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
    
async function init() {
    // Récupèration des données des photographes
    const params = new URLSearchParams(window.location.search)
    let photographId = params.get('id')
    let pIdNumber
    if (photographId) pIdNumber = parseInt(photographId)
    const { profileSelected } = await getPhotographersById(pIdNumber)
    displayDataProfile(profileSelected)
    

    // console.log(photographId)
}

init()

 

