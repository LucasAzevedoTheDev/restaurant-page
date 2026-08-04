import "./styles.css";
import {generateHomepage} from "./home.js";
import {generateMenu} from "./menu.js";
import {generateAbout} from "./about.js";
import {generateContact} from "./contact.js";

generateHomepage();

const exploreButton = document.querySelector(".explore-button");
exploreButton.addEventListener("click", generateMenu);

// generateMenu();
// generateAbout();
// generateContact();