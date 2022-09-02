// Fonction qui va créer l'article dans le DOM
export function profile(data) {
  function createProfilePage() {
    // Création de l'élément et appel de la fonction
    const article = document.createElement("article");

    article.innerHTML = profileCard(data);

    return article;
  }

  return { data, createProfilePage };

  // Fonction qui va afficher les données
  function profileCard(data) {
    const { name, city, country, tagline, portrait } = data;
    return `  <div class="profile">
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
            `;
  }
}

// Fonction qui va créer l'article dans le DOM
export function galerieCard(data) {
  // Création de l'élément et appel de la fonction
  function createGalerie() {
    const article = document.createElement("article");

    // Ajout de la class pour la mise en forne
    article.classList.add("galerie");

    // dataset va enregistrer les médias suivant l'id
    article.dataset.id = data.id;

    // console.log(data.id)

    article.innerHTML = mediaTemplate(data);

    return article;
  }

  return { data, createGalerie };

  // Fonction qui va afficher les données
  function mediaTemplate(data) {
    const { image, title, likes, video, id } = data;

    // Séparation selon image ou vidéo dans les médias
    if (image) {
      return ` 
            
                <img title="${title}" id="${id}" src="assets/images/${image}"  alt="${title}" tabindex="0"> 
            
            <div class="infos">
                <p class="title" aria-label="${title}">${title}</p>
                <p aria-label="${likes} coeur">${likes}<i class="fas fa-heart media-liked" tabindex="0"></i></p>
            </div>
            `;
    } else if (video) {
      return ` 
            
                <video title="${title}" id="${id}" controls src="assets/images/${video}" alt="${title}"></video tabindex="0">

            <div class="infos">
                <p class="title"  aria-label="${title}">${title}</p>
                <p aria-label="${likes} coeur">${likes}<i class="fas fa-heart media-liked" tabindex="0"></i></p>
            </div>
            `;
    }

    return "no image or video";
  }
}
