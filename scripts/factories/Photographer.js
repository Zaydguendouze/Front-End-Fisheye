function photographFactory(data) {
    
    function createPhotographeCard() {
        // On crée les élements dans l'article
        const section = document.createElement('article')

        // définition de la syntaxe HTML
        section.innerHTML = photographerCard(data)

        // Renvoi de la valeur
        return section
    }

    // Renvoi des données
    return { data, createPhotographeCard }

    // Création de la fonction pour afficher les données dans le HTML
    function photographerCard(data) {
        const { name, id, city, country, tagline, price, portrait } = data
        return `
                <a href="photographer.html?id=${id}" aria-label="Accéder à la page du photographe ${name}" tabindex="0">
                    <img src="assets/photographers/${portrait}" alt="Image du photographe ${name}"
                    />
                <h2>${name}</h2>
                </a>
                <div class="infos_photographer" aria-label="infos du photographe ${name}">
                    <h3>${city}, ${country}</h3>
                    <p>${tagline}</p>
                    <p>${price}€/jour</p>
                </div>
            `
    }
}
