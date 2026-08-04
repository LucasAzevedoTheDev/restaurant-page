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

  const menuFirstSection = document.createElement("div");
  menuFirstSection.classList.add("menu-first-section");

  const menuFirstSectionH2 = document.createElement("h2");
  menuFirstSectionH2.classList.add("h2-menu");
  menuFirstSectionH2.textContent = "Section 1: Fire & Embers";
  menuFirstSection.appendChild(menuFirstSectionH2);

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
  menuFirstSection.appendChild(firstSectionFP);

  menuContainer.appendChild(headerDiv);
  menuContainer.appendChild(menuFirstSection);
  contentDiv.appendChild(menuContainer);
}

export {generateMenu}