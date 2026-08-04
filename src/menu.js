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

  const firstSection = document.createElement("div");
  firstSection.classList.add("first-section");

  const FirstSectionH2 = document.createElement("h2");
  FirstSectionH2.classList.add("h2-menu");
  FirstSectionH2.textContent = "Section 1: Fire & Embers";
  firstSection.appendChild(FirstSectionH2);

  const firstSectionFP = document.createElement("div");
  firstSectionFP.classList.add("section-plate");

  const firstSectionFPHead = document.createElement("h3");
  firstSectionFPHead.classList.add("plate-head");
  firstSectionFPHead.textContent = "The Clan's Tomahawk";

  const firstSectionFPDescription = document.createElement("p");
  firstSectionFPDescription.classList.add("plate-description");
  firstSectionFPDescription.textContent = "Description: An imposing 1.2kg dry-aged cut, grilled over live fire with Maldon sea salt and smoked herb butter.";

  const firstSectionFPPrice = document.createElement("p");
  firstSectionFPPrice.classList.add("plate-price");
  firstSectionFPPrice.textContent = "Price: $85";

  firstSectionFP.appendChild(firstSectionFPHead);
  firstSectionFP.appendChild(firstSectionFPDescription);
  firstSectionFP.appendChild(firstSectionFPPrice);

  const firstSectionSP = document.createElement("div");
  firstSectionSP.classList.add("section-plate");

  const firstSectionSPHead = document.createElement("h3");
  firstSectionSPHead.classList.add("plate-head");
  firstSectionSPHead.textContent = "Rune Entrecôte";

  const firstSectionSPDescription = document.createElement("p");
  firstSectionSPDescription.classList.add("plate-description");
  firstSectionSPDescription.textContent = "Description: Juicy ribeye seared on a cast-iron skillet, finished with a dark beer and juniper reduction.";

  const firstSectionSPPrice = document.createElement("p");
  firstSectionSPPrice.classList.add("plate-price");
  firstSectionSPPrice.textContent = "Price: $52";

  firstSectionSP.appendChild(firstSectionSPHead);
  firstSectionSP.appendChild(firstSectionSPDescription);
  firstSectionSP.appendChild(firstSectionSPPrice);

  const firstSectionTP = document.createElement("div");
  firstSectionTP.classList.add("section-plate");

  const firstSectionTPHead = document.createElement("h3");
  firstSectionTPHead.classList.add("plate-head");
  firstSectionTPHead.textContent = "Winter Ribs";

  const firstSectionTPDescription = document.createElement("p");
  firstSectionTPDescription.classList.add("plate-description");
  firstSectionTPDescription.textContent = "Description: Beef ribs slow-smoked for 12 hours over fruitwood, melting right at the touch of a fork.";

  const firstSectionTPPrice = document.createElement("p");
  firstSectionTPPrice.classList.add("plate-price");
  firstSectionTPPrice.textContent = "Price: $85";

  firstSectionTP.appendChild(firstSectionTPHead);
  firstSectionTP.appendChild(firstSectionTPDescription);
  firstSectionTP.appendChild(firstSectionTPPrice);
  firstSectionTP.appendChild(firstSectionQPPrice);

  firstSection.appendChild(firstSectionFP);
  firstSection.appendChild(firstSectionSP);
  // firstSection.appendChild(firstSectionTP);

  menuContainer.appendChild(headerDiv);
  menuContainer.appendChild(firstSection);
  contentDiv.appendChild(menuContainer);
}

export {generateMenu}