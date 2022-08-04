// Fonction qui va créer l'article dans le DOM
export function profile(data) {

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
