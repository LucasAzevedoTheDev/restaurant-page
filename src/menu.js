const contentDiv = document.querySelector("#content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

function generateMenu() {
  contentDiv.innerHTML = "";

  // Reset #content style
  contentDiv.style.display = "block";
  contentDiv.style.alignItems = "initial";
  contentDiv.style.justifyContent = "initial";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  contentDiv.appendChild(menuContainer);

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("menu-header");

  const h1Text = document.createElement("h1");
  h1Text.textContent = "The Nordic Menu";

  const menuSubtitle = document.createElement("p");
  menuSubtitle.textContent = "Handpicked prime cuts, seared over open fire and finished with rustic spices.";

  headerDiv.appendChild(h1Text);
  headerDiv.appendChild(menuSubtitle);
  menuContainer.appendChild(headerDiv);

  const firstSection = document.createElement("div");
  firstSection.classList.add("first-section");

  const FirstSectionH2 = document.createElement("h2");
  FirstSectionH2.classList.add("h2-menu");
  FirstSectionH2.textContent = "Section 1: Fire & Embers";
  firstSection.appendChild(FirstSectionH2);

  const firstSectionPlate1 = document.createElement("div");
  firstSectionPlate1.classList.add("section-plate");

  const firstSectionPlate1Head = document.createElement("h3");
  firstSectionPlate1Head.classList.add("plate-head");
  firstSectionPlate1Head.textContent = "The Clan's Tomahawk";

  const firstSectionPlate1Description = document.createElement("p");
  firstSectionPlate1Description.classList.add("plate-description");
  firstSectionPlate1Description.textContent = "Description: An imposing 1.2kg dry-aged cut, grilled over live fire with Maldon sea salt and smoked herb butter.";

  const firstSectionPlate1Price = document.createElement("p");
  firstSectionPlate1Price.classList.add("plate-price");
  firstSectionPlate1Price.textContent = "Price: $85";

  firstSectionPlate1.appendChild(firstSectionPlate1Head);
  firstSectionPlate1.appendChild(firstSectionPlate1Description);
  firstSectionPlate1.appendChild(firstSectionPlate1Price);

  const firstSectionPlate2 = document.createElement("div");
  firstSectionPlate2.classList.add("section-plate");

  const firstSectionPlate2Head = document.createElement("h3");
  firstSectionPlate2Head.classList.add("plate-head");
  firstSectionPlate2Head.textContent = "Rune Entrecôte";

  const firstSectionPlate2Description = document.createElement("p");
  firstSectionPlate2Description.classList.add("plate-description");
  firstSectionPlate2Description.textContent = "Description: Juicy ribeye seared on a cast-iron skillet, finished with a dark beer and juniper reduction.";

  const firstSectionPlate2Price = document.createElement("p");
  firstSectionPlate2Price.classList.add("plate-price");
  firstSectionPlate2Price.textContent = "Price: $52";

  firstSectionPlate2.appendChild(firstSectionPlate2Head);
  firstSectionPlate2.appendChild(firstSectionPlate2Description);
  firstSectionPlate2.appendChild(firstSectionPlate2Price);

  const firstSectionPlate3 = document.createElement("div");
  firstSectionPlate3.classList.add("section-plate");

  const firstSectionPlate3Head = document.createElement("h3");
  firstSectionPlate3Head.classList.add("plate-head");
  firstSectionPlate3Head.textContent = "Winter Ribs";

  const firstSectionPlate3Description = document.createElement("p");
  firstSectionPlate3Description.classList.add("plate-description");
  firstSectionPlate3Description.textContent = "Description: Beef ribs slow-smoked for 12 hours over fruitwood, melting right at the touch of a fork.";

  const firstSectionPlate3Price = document.createElement("p");
  firstSectionPlate3Price.classList.add("plate-price");
  firstSectionPlate3Price.textContent = "Price: $46";

  firstSectionPlate3.appendChild(firstSectionPlate3Head);
  firstSectionPlate3.appendChild(firstSectionPlate3Description);
  firstSectionPlate3.appendChild(firstSectionPlate3Price);

  const firstSectionPlate4 = document.createElement("div");
  firstSectionPlate4.classList.add("section-plate");

  const firstSectionPlate4Head = document.createElement("h3");
  firstSectionPlate4Head.classList.add("plate-head");
  firstSectionPlate4Head.textContent = "Picanha on Live Embers";

  const firstSectionPlate4Description = document.createElement("p");
  firstSectionPlate4Description.classList.add("plate-description");
  firstSectionPlate4Description.textContent = "Description: Selected cuts of picanha grilled on rustic skewers, served with sea salt and roasted garlic.";

  const firstSectionPlate4Price = document.createElement("p");
  firstSectionPlate4Price.classList.add("plate-price");
  firstSectionPlate4Price.textContent = "Price: $48";

  firstSectionPlate4.appendChild(firstSectionPlate4Head);
  firstSectionPlate4.appendChild(firstSectionPlate4Description);
  firstSectionPlate4.appendChild(firstSectionPlate4Price);

  firstSection.appendChild(firstSectionPlate1);
  firstSection.appendChild(firstSectionPlate2);
  firstSection.appendChild(firstSectionPlate3);
  firstSection.appendChild(firstSectionPlate4);
  menuContainer.appendChild(firstSection);
}

export {generateMenu}