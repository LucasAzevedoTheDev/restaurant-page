import mainPlateImgSrc from "../photos/main-plate.png";
const contentDiv = document.querySelector("#content");

function generateHomepage() {
  contentDiv.innerHTML = "";
  
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container-div");
  contentDiv.appendChild(containerDiv);
  
  const mainTextDiv = document.createElement("div");
  mainTextDiv.classList.add("main-text-div");

  const mainTextDivWrapper = document.createElement("div");
  mainTextDivWrapper.classList.add("main-text-div-wrapper");

  const h1Text = document.createElement("h1");
  h1Text.textContent = "The Nordic grill";
  h1Text.classList.add("h1-text");

  const pText = document.createElement("p");
  pText.textContent = "An authentic Nordic feast of flame-kissed meats and wild herbs, crafted for the ultimate carnivore experience.";
  pText.classList.add("p-text");

  const exploreButton = document.createElement("button");
  exploreButton.textContent = "Explore Menu";
  exploreButton.classList.add("explore-button");

  mainTextDivWrapper.appendChild(h1Text);
  mainTextDivWrapper.appendChild(pText);
  mainTextDivWrapper.appendChild(exploreButton);
  mainTextDiv.appendChild(mainTextDivWrapper);

  const mainPlateDiv = document.createElement("div");
  mainPlateDiv.classList.add("main-plate-div");

  const mainPlateImg = document.createElement("img");
  mainPlateImg.classList.add("main-plate-img");
  mainPlateImg.src = mainPlateImgSrc;
  mainPlateImg.alt = "plate of meat";
  mainPlateDiv.appendChild(mainPlateImg);

  containerDiv.appendChild(mainTextDiv);
  containerDiv.appendChild(mainPlateDiv);
}

export {generateHomepage};