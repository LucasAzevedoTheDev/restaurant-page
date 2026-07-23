import mainPlateImgSrc from "../photos/meat.png";
const containerDiv = document.querySelector("#content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

function generateHomepage() {
  const headName = document.createElement("h2");
  headName.textContent = "Hoplon";
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
  nav.appendChild(searchWrapper);
  
  const mainTextDiv = document.createElement("div");
  mainTextDiv.classList.add("main-text-div");

  const h1Text = document.createElement("h1");
  h1Text.textContent = "The Nordic grill";
  h1Text.classList.add("h1-text");

  const pText = document.createElement("p");
  pText.textContent = "An authentic Nordic feast of flame-kissed meats and wild herbs, crafted for the ultimate carnivore experience.";
  pText.classList.add("p-text");

  const exploreButton = document.createElement("button");
  exploreButton.textContent = "Explore Menu";
  exploreButton.classList.add("explore-button");

  mainTextDiv.appendChild(h1Text);
  mainTextDiv.appendChild(pText);
  mainTextDiv.appendChild(exploreButton);

  const mainPlateImg = document.createElement("img");
  mainPlateImg.src = mainPlateImgSrc;
  mainPlateImg.alt = "plate of meat";

  containerDiv.appendChild(mainTextDiv);
  containerDiv.appendChild(mainPlateImg);
}

export {generateHomepage};