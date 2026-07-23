import mainPlateImgSrc from "../photos/meat.png";
const containerDiv = document.querySelector("#content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

function generateHomepage() {
  const headName = document.createElement("h2");
  headName.textContent = "Hoplon";
  nav.before(headName);

  const mainTextDiv = document.createElement("div");
  mainTextDiv.classList.add("main-text");
  const h1Text = document.createElement("h1");
  h1Text.textContent = "The Nordic grill";
  const pText = document.createElement("p");
  pText.textContent = "An authentic Nordic feast of flame-kissed meats and wild herbs, crafted for the ultimate carnivore experience.";
  const exploreButton = document.createElement("button");
  exploreButton.textContent = "Explore Menu";
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