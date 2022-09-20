// Fonction qui va créer l'article dans le DOM
export function PhotographerFactory(data) {
  // Création de la fonction pour afficher les données dans le HTML
  function createPhotographerCardDOM() {
    const { name, id, city, country, tagline, price, portrait } = data;
    return `
        <article>
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
        </article>
           `;
  }

  // Fonction qui va afficher les données
  function createProfileCardDOM() {
    const { name, city, country, tagline, portrait } = data;
    return `
    <article>  
    <div class="profile">
       <div class="infos_profil" tabindex="0">
          <h1>${name}</h1>
        </div>
        <div class="infos_profil_details" tabindex="0">
          <h2>${city}, ${country}</h2>
            <p class="tagline">${tagline}</p>
        </div>
      </div>
        <button class="contact_button" tabindex="0" id="contact_btn" aria-label="Formulaire de contact">Contactez Moi</button>
          <img src="assets/photographers/${portrait}" alt="portrait du photographe ${name}" tabindex="0">
      </article>
            `;
  }

  // Fonction qui va afficher les données
  function createImgOrVideoDOM() {
    const { image, title, likes, video, id } = data;

    // Séparation selon image ou vidéo dans les médias
    if (image) {
      return `
      <article class="galerie" data-id="${id}">
      <img title="${title}" id="${id}" src="assets/images/${image}" width="400px"  alt="${title}" tabindex="0"> 
            
            <div class="infos">
                <p class="title" aria-label="${title}">${title}</p>
                <p aria-label="${likes} coeur">${likes}<i class="fas fa-heart media-liked" tabindex="0"></i></p>
            </div>
      </article>
            `;
    } else if (video) {
      return `<article class="galerie" data-id="${id}">
      <video title="${title}" id="${id}" controls src="assets/images/${video}" alt="${title}"></video tabindex="0">

            <div class="infos">
                <p class="title"  aria-label="${title}">${title}</p>
                <p aria-label="${likes} coeur">${likes}<i class="fas fa-heart media-liked" tabindex="0"></i></p>
            </div>
      </article>
            `;
    }

    return "no image or video";
  }

  return {
    data,
    createImgOrVideoDOM,
    createPhotographerCardDOM,
    createProfileCardDOM,
  };
}
