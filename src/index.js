import generateHome from "./home";
import generateMenu from "./menu";
import generateContact from "./contact";

let homeButton = document.querySelector(".home");
let menuButton = document.querySelector(".menu");
let contactButton = document.querySelector(".contact");

let centerContent = document.querySelector(".centerFrame");

centerContent.appendChild(generateHome());

homeButton.addEventListener("click", generateContent);
menuButton.addEventListener("click", generateContent);
contactButton.addEventListener("click", generateContent);

function generateContent() {
  while (centerContent.firstChild)
    centerContent.removeChild(centerContent.firstChild);

  switch (this.dataset.buttonName) {
    case "home":
      centerContent.appendChild(generateHome());
      break;
    case "menu":
      centerContent.appendChild(generateMenu());
      break;
    case "contact":
      centerContent.appendChild(generateContact());
      break;
  }
}
