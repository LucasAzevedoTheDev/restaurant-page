import "./styles.css";
import {generateHomepage} from "./home.js";
import {generateMenu} from "./menu.js";
import {generateAbout} from "./about.js";
import {generateContact} from "./contact.js";

const header = document.querySelector("header");
const nav = document.querySelector("nav");

function generateHeader() {
  const headName = document.createElement("h2");
  headName.textContent = "Hoplon";
  headName.classList.add("head-name");
  nav.before(headName);

  const searchWrapper = document.createElement("div");
  searchWrapper.classList.add("search-wrapper");

  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");
  searchInput.placeholder = "Search";
  searchInput.type = "text";

  const searchIcon = document.createElement("div");
  searchIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`
  searchIcon.classList.add("search-icon");

  searchWrapper.appendChild(searchInput);
  searchWrapper.appendChild(searchIcon);
  header.appendChild(searchWrapper);
}
generateHeader();
generateHomepage();

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");
const contactButton = document.querySelector(".contact-button");

const exploreButton = document.querySelector(".explore-button");
exploreButton.addEventListener("click", () => {
  generateMenu();
  menuButton.classList.add("active-button");
  
  //RESET OTHER BUTTONS 
  homeButton.classList.remove("active-button");
  aboutButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");
});

menuButton.addEventListener("click", () => {
  generateMenu();
  menuButton.classList.add("active-button");

  homeButton.classList.remove("active-button");
  aboutButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");
});

aboutButton.addEventListener("click", () => {
  generateAbout();
  aboutButton.classList.add("active-button");

  homeButton.classList.remove("active-button");
  menuButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");
});

contactButton.addEventListener("click", () => {
  generateContact();
  contactButton.classList.add("active-button");

  homeButton.classList.remove("active-button");
  menuButton.classList.remove("active-button");
  aboutButton.classList.remove("active-button");
});

homeButton.addEventListener("click", () => {
  generateHomepage();
  homeButton.classList.add("active-button");
})
