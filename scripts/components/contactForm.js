// const main = document.getElementById("main");
const myModal = document.getElementById("contact_modal");
const btn = document.querySelectorAll(".contact_button");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const closeMsg = document.querySelector(".message");
const submitBtn = document.querySelector(".contact_button");

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

// regex
const nameRegex = /^[a-zA-Z-\s]+$/;
const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const messageRegex = /^[a-zA-Z-\s]+$/;

// messages
const messagesErrors = {
  lastNameMsg1: "Le Nom doit comporter au moins deux caractères",
  lastNameMsg2: "Le Nom doit être composé de lettres",
  firstNameMsg1: "Le Prénom doit comporter au moins deux caractères",
  firstNameMsg2: "Le Prénom doit être composé de lettres",
  emailMsg: "Veuillez entrer une adresse mail valide",
  msg: "Veuillez entrer du texte",
};

// close modal event (désactive le display)
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// désactive le formulaire de base et bloque celui du message de confirmation
// function confirmation() {
//   if (myModal) myModal.style.display = "block";
// }

function closeModal() {
  if (myModal) myModal.style.display = "none";
  if (form) form.reset();
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// formData[] pour ne pas les lister directement dans le HTML
// lastName
formData[0].addEventListener("input", lastNameValid);
function lastNameValid() {
  if (firstName.value.trim() == "" || firstName.value.length <= 2) {
    let firstNameError = document.getElementById("firstname-message");
    firstNameError.innerHTML = messagesErrors.firstNameMsg1;

    return false;
  } else if (nameRegex.test(firstName.value) == false) {
    let firstNameError = document.getElementById("firstname-message");
    firstNameError.innerHTML = messagesErrors.firstNameMsg2;

    return false;
  } else {
    document.getElementById("firstname-message").innerHTML = "";
    return true;
  }
}

// firstName
formData[1].addEventListener("input", firstNameValid);
function firstNameValid() {
  if (lastName.value.trim() == "" || lastName.value.length <= 2) {
    let lastNameError = document.getElementById("lastname-message");
    lastNameError.innerHTML = messagesErrors.lastNameMsg1;

    return false;
  } else if (nameRegex.test(lastName.value) == false) {
    let lastNameError = document.getElementById("lastname-message");
    lastNameError.innerHTML = messagesErrors.lastNameMsg2;

    return false;
  } else {
    document.getElementById("lastname-message").innerHTML = "";
    return true;
  }
}

// email
formData[2].addEventListener("input", emailValid);
function emailValid() {
  if (emailRegex.test(email.value) == false) {
    let emailError = document.getElementById("email-message");
    emailError.innerHTML = messagesErrors.emailMsg;

    return false;
  } else {
    document.getElementById("email-message").innerHTML = "";
    return true;
  }
}

// message
formData[3].addEventListener("input", messageValid);
function messageValid() {
  if (message.value.trim() == "" || message.value.length <= 2) {
    let messageError = document.getElementById("msg-message");
    messageError.innerHTML = messagesErrors.msg;

    return false;
  } else if (messageRegex.test(message.value) == false) {
    let messageError = document.getElementById("msg-message");
    messageError.innerHTML = messagesErrors.msg;

    return false;
  } else {
    document.getElementById("msg-message").innerHTML = "";
    return true;
  }
}

// validate
// au clique du bouton, lancer la function validate()
// preventdefault() pour bloquer le comportement du clique par défaut et rester
// sur le formulaire
if (form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Prenom: " + firstName.value);
    console.log("Nom: " + lastName.value);
    console.log("Email: " + email.value);
    console.log("Message: " + message.value);
  });
