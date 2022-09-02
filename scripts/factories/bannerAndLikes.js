// Fonction qui va afficher la bannière
export function bannerCardPrice(data) {
  function getBannerPrice() {
    const paragraph = document.createElement("p");

    paragraph.innerHTML = bannerPriceTemplate(data);

    return paragraph;
  }

  return { data, getBannerPrice };
}

// Template pour la bannière
function bannerPriceTemplate(data) {
  const { price } = data;

  return `<p class="price">${price}€/jour</p>`;
}

// Fonction pour la bannière (Likes)
export function bannerLikes(data) {
  // Mettre la somme de likes à zéro pour ajouter les likes au total
  let allLikes = 0;

  // Utilisation de .map() pour afficher le résultat et retourner le nombre de likes
  data.map((data) => {
    // += pour concatener et donc additionner tous les likes
    allLikes += data.likes;
    // console.log(data.likes);

    return allLikes;
  });
  // console.log(allLikes);
  const likes = document.querySelector(".likes");

  if (likes)
    likes.innerHTML = `<div class="details" tabindex="0">
                            <p>${allLikes} <i class="fas fa-heart"></i></p>
                         </div>`;

  // On cherche tous les événements avec la class media-liked dans profilesFactory
  const hearts = document.querySelectorAll(".media-liked");

  // On séléctionne tous les éléments "hearts"
  hearts.forEach((element) => {
    element.addEventListener("click", addLikes);
    element.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        addLikes();
      }
    });

    // La fonction va ajouter 1 like au total à chaque clique
    function addLikes() {
      console.log(hearts);
      // Si la class media-liked est détectée on ajoute 1 like
      // Elle va aussi ajouter ++ au text qui là est le nombre de likes du média
      if (element.classList.contains("media-liked")) {
        allLikes += 1;
        likes.innerHTML = `<div class="details" tabindex="0">
                            <p>${allLikes} <i class="fas fa-heart"></i></p>
                         </div>`;
        console.log(element.previousSibling);
        // previousSibling
        element.previousSibling.textContent++;

        // Le remove va retirer le textContent appliqué avec la class media-liked
        element.classList.remove("media-liked");
      } else {
        element.classList.add("media-liked");
        allLikes -= 1;
        likes.innerHTML = `<div class="details" tabindex="0">
                            <p>${allLikes} <i class="fas fa-heart"></i></p>
                         </div>`;
        element.previousSibling.textContent--;
      }
    }
  });
}
