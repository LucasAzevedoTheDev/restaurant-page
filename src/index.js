import "./styles.css";
import {generateHomepage} from "./home.js";
import {generateMenu} from "./menu.js";
import {generateAbout} from "./about.js";
import {generateContact} from "./contact.js";

generateHomepage();

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");
const contactButton = document.querySelector(".contact-button");

const exploreButton = document.querySelector(".explore-button");
exploreButton.addEventListener("click", () => {
  generateMenu();
})

// generateMenu();
// generateAbout();
// generateContact();