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
  // Mettre la somme de likes à zéro
  let allLikes = 0;

  data.map((data) => {
    allLikes += data.likes;
    return allLikes;
  });
  console.log(allLikes);
  const likes = document.querySelector(".likes");

  if (likes)
    likes.innerHTML = `<div class="details">
                            <p>${allLikes}  <i class="fas fa-heart"></i></p>
                         </div>`;
}
