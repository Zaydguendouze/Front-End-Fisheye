// Fonction pour récupérer les données Json
// On récupère
async function getPhotographers() {

    const response = await fetch('./data/photographers.json')
    const data = await response.json()
    // console.log(data.photographers)
    // console.log(data.media)

    return { profiles: data.photographers, medias: data.media }
}

// Fonction qui récupère le photographe en fonction de son id
async function getPhotographersById(id) {

    const profiles = await getPhotographers()
    const profileSelected = profiles.profiles.find(
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
        const { name, id, city, country, tagline, price, portrait } = data
        return `<h2>${name}</h2>`
    }
    
}

// Focntion 
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
    

    console.log(photographId)

    // if (photographId) pIdNumber = parseInt(photographId)
    // displayDataProfile(photographers)
}

init()

 

