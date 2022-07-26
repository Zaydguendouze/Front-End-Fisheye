async function getPhotographers() {
  // Récupèration des données Json
  const photographers = await fetch('/data/photographers.json')
  // Extraction des données
  const data = await photographers.json()
  // console.log(JSON.stringify(data))
  
  // Affichage des données extraites
  return { photographers: data.photographers }
  
}
    

    
async function displayData(photographers) {
    // Sélection du querySelector pour afficher les données
    const photographersSection = document.querySelector('.photographer_section')

    photographers.forEach((photographer) => {
    // Appel de la class PhotographerCard() 
    const photographerModel = new PhotographerCard(photographer)
    // Création des élements dans le DOM
    const userCardDOM = photographerModel.createPhotographerCard()
    photographersSection.appendChild(userCardDOM)
})
}
    
async function init() {
  // Récupèration des données des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()



    