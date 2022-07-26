class PhotographerCard {

    // Création du constructor
    constructor(photographer) {
        this._photographer = photographer
    }

    // La fonction qui va permettre de créer les élements
    createPhotographerCard() {
        const $section = document.createElement('article')
        $section.classList.add('photographer_section')

        const photographerCard = `
            <a>
                <img src="assets/photographers/${this._photographer.portrait}"
                />
            <h2>${this._photographer.name}</h2>
            </a>
            <div class="infos_photographer">
                <h3>${this._photographer.city}, ${this._photographer.country}</h3>
                <p>${this._photographer.tagline}</p>
                <p class="price">${this._photographer.price}€/jour</p>
            </div>
        `
        // Injection dans le HTML des données de chaque photographe
        $section.innerHTML = photographerCard
        return $section
    }
}
