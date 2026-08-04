const contentDiv = document.querySelector("#content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

function generateMenu() {
  contentDiv.innerHTML = "";

  // Reset #content style
  contentDiv.style.display = "block";
  contentDiv.style.alignItems = "initial";
  contentDiv.style.justifyContent = "initial";
  contentDiv.style.height = "auto";

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

  const firstSectionH2 = document.createElement("h2");
  firstSectionH2.classList.add("h2-menu");
  firstSectionH2.textContent = "Section 1: Fire & Embers";
  firstSection.appendChild(firstSectionH2);

  const firstSectionPlatesDiv = document.createElement("div");
  firstSectionPlatesDiv.classList.add("plates-container");
  firstSection.appendChild(firstSectionPlatesDiv);

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

  firstSectionPlatesDiv.appendChild(firstSectionPlate1);
  firstSectionPlatesDiv.appendChild(firstSectionPlate2);
  firstSectionPlatesDiv.appendChild(firstSectionPlate3);
  firstSectionPlatesDiv.appendChild(firstSectionPlate4);
  menuContainer.appendChild(firstSection);

  const secondSection = document.createElement("div");
  secondSection.classList.add("second-section");

  const secondSectionH2 = document.createElement("h2");
  secondSectionH2.classList.add("h2-menu");
  secondSectionH2.textContent = "Section 2: Earth & Garden";
  secondSection.appendChild(secondSectionH2);

  const secondSectionPlatesDiv = document.createElement("div");
  secondSectionPlatesDiv.classList.add("plates-container");
  secondSection.appendChild(secondSectionPlatesDiv);

  const secondSectionPlate1 = document.createElement("div");
  secondSectionPlate1.classList.add("section-plate");

  const secondSectionPlate1Head = document.createElement("h3");
  secondSectionPlate1Head.classList.add("plate-head");
  secondSectionPlate1Head.textContent = "Smashed Rustic Potatoes";

  const secondSectionPlate1Description = document.createElement("p");
  secondSectionPlate1Description.classList.add("plate-description");
  secondSectionPlate1Description.textContent = "Description: Oven-roasted in their skins with roasted garlic oil, fresh rosemary, and torched parmesan shavings.";

  const secondSectionPlate1Price = document.createElement("p");
  secondSectionPlate1Price.classList.add("plate-price");
  secondSectionPlate1Price.textContent = "Price: $18";

  secondSectionPlate1.appendChild(secondSectionPlate1Head);
  secondSectionPlate1.appendChild(secondSectionPlate1Description);
  secondSectionPlate1.appendChild(secondSectionPlate1Price);
  
  const secondSectionPlate2 = document.createElement("div");
  secondSectionPlate2.classList.add("section-plate");

  const secondSectionPlate2Head = document.createElement("h3");
  secondSectionPlate2Head.classList.add("plate-head");
  secondSectionPlate2Head.textContent = "Embers Vegetables";

  const secondSectionPlate2Description = document.createElement("p");
  secondSectionPlate2Description.classList.add("plate-description");
  secondSectionPlate2Description.textContent = "Description: A mix of asparagus, baby carrots, and red onions charred over live fire with rustic chimichurri sauce.";

  const secondSectionPlate2Price = document.createElement("p");
  secondSectionPlate2Price.classList.add("plate-price");
  secondSectionPlate2Price.textContent = "Price: $22";

  secondSectionPlate2.appendChild(secondSectionPlate2Head);
  secondSectionPlate2.appendChild(secondSectionPlate2Description);
  secondSectionPlate2.appendChild(secondSectionPlate2Price);

  const secondSectionPlate3 = document.createElement("div");
  secondSectionPlate3.classList.add("section-plate");

  const secondSectionPlate3Head = document.createElement("h3");
  secondSectionPlate3Head.classList.add("plate-head");
  secondSectionPlate3Head.textContent = "House Farofa";

  const secondSectionPlate3Description = document.createElement("p");
  secondSectionPlate3Description.classList.add("plate-description");
  secondSectionPlate3Description.textContent = "Description: Cassava flour toasted in bottled butter with crispy onion, artisan bacon, and nuts.";

  const secondSectionPlate3Price = document.createElement("p");
  secondSectionPlate3Price.classList.add("plate-price");
  secondSectionPlate3Price.textContent = "Price: $15";

  secondSectionPlate3.appendChild(secondSectionPlate3Head);
  secondSectionPlate3.appendChild(secondSectionPlate3Description);
  secondSectionPlate3.appendChild(secondSectionPlate3Price);

  secondSectionPlatesDiv.appendChild(secondSectionPlate1);
  secondSectionPlatesDiv.appendChild(secondSectionPlate2);
  secondSectionPlatesDiv.appendChild(secondSectionPlate3);
  menuContainer.appendChild(secondSection);

  const thirdSection = document.createElement("div");
  thirdSection.classList.add("third-section");

  const thirdSectionH2 = document.createElement("h2");
  thirdSectionH2.classList.add("h2-menu");
  thirdSectionH2.textContent = "Section 3: Elixirs & Potions";
  thirdSection.appendChild(thirdSectionH2);

  const thirdSectionPlate1 = document.createElement("div");
  thirdSectionPlate1.classList.add("section-plate");

  const thirdSectionPlate1Head = document.createElement("h3");
  thirdSectionPlate1Head.classList.add("plate-head");
  thirdSectionPlate1Head.textContent = "Valhalla Smoked";

  const thirdSectionPlate1Description = document.createElement("p");
  thirdSectionPlate1Description.classList.add("plate-description");
  thirdSectionPlate1Description.textContent = "Description: Our signature cocktail with bourbon, red vermouth, wild honey smoked on the spot with cinnamon, and an orange peel.";

  const thirdSectionPlate1Price = document.createElement("p");
  thirdSectionPlate1Price.classList.add("plate-price");
  thirdSectionPlate1Price.textContent = "Price: $16";

  thirdSectionPlate1.appendChild(thirdSectionPlate1Head);
  thirdSectionPlate1.appendChild(thirdSectionPlate1Description);
  thirdSectionPlate1.appendChild(thirdSectionPlate1Price);

  const thirdSectionPlate2 = document.createElement("div");
  thirdSectionPlate2.classList.add("section-plate");

  const thirdSectionPlate2Head = document.createElement("h3");
  thirdSectionPlate2Head.classList.add("plate-head");
  thirdSectionPlate2Head.textContent = "Nordic Lager Beer";

  const thirdSectionPlate2Description = document.createElement("p");
  thirdSectionPlate2Description.classList.add("plate-description");
  thirdSectionPlate2Description.textContent = "Description: House artisan pure malt, full-bodied, refreshing, and ideal for pairing with red meats.";

  const thirdSectionPlate2Price = document.createElement("p");
  thirdSectionPlate2Price.classList.add("plate-price");
  thirdSectionPlate2Price.textContent = "Price: $9";

  thirdSectionPlate2.appendChild(thirdSectionPlate2Head);
  thirdSectionPlate2.appendChild(thirdSectionPlate2Description);
  thirdSectionPlate2.appendChild(thirdSectionPlate2Price);

  const thirdSectionPlate3 = document.createElement("div");
  thirdSectionPlate3.classList.add("section-plate");

  const thirdSectionPlate3Head = document.createElement("h3");
  thirdSectionPlate3Head.classList.add("plate-head");
  thirdSectionPlate3Head.textContent = "Gneiss Mineral Water (Still or Sparkling)";

  const thirdSectionPlate3Description = document.createElement("p");
  thirdSectionPlate3Description.classList.add("plate-description");
  thirdSectionPlate3Description.textContent = "Description: Purified spring water served in an artisanal glass bottle.";

  const thirdSectionPlate3Price = document.createElement("p");
  thirdSectionPlate3Price.classList.add("plate-price");
  thirdSectionPlate3Price.textContent = "Price: $6";

  thirdSectionPlate3.appendChild(thirdSectionPlate3Head);
  thirdSectionPlate3.appendChild(thirdSectionPlate3Description);
  thirdSectionPlate3.appendChild(thirdSectionPlate3Price);

  thirdSection.appendChild(thirdSectionPlate1);
  thirdSection.appendChild(thirdSectionPlate2);
  thirdSection.appendChild(thirdSectionPlate3);
  menuContainer.appendChild(thirdSection);
}

export {generateMenu}