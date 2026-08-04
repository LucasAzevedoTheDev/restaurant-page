const contentDiv = document.querySelector("#content");

function generateAbout() {
  // Reset #content style
  contentDiv.innerHTML = "";
  contentDiv.style.display = "block";
  contentDiv.style.alignItems = "initial";
  contentDiv.style.justifyContent = "initial";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  contentDiv.appendChild(aboutContainer);

  const aboutCard = document.createElement("div");
  aboutCard.classList.add("about-card");
  aboutContainer.appendChild(aboutCard);

  const aboutP1 = document.createElement("p");
  aboutP1.classList.add("about-p");
  aboutP1.textContent = "Founded in 2018 in the rugged backcountry, Hoplon was built on a single obsession: mastering the art of open-fire cooking. What started as an underground gathering for wood-fire enthusiasts quickly evolved into a sanctuary for those who appreciate the primal, honest nature of a perfectly seared steak.";
  
  const aboutP2 = document.createElement("p");
  aboutP2.classList.add("about-p");
  aboutP2.textContent = "We work directly with independent, certified ranches to source premier dry-aged cuts, ensuring every piece of meat meets our uncompromising standards. Every steak is seasoned simply with coarse sea salt and charred over crackling hardwood embers, allowing the rich, natural flavors of the beef to speak for themselves.";

  const aboutP3 = document.createElement("p");
  aboutP3.classList.add("about-p");
  aboutP3.textContent = "More than just a steakhouse, Hoplon is a place to slow down, gather around the hearth, and share in a legendary feast. Whether you are a lifelong carnivore or a wanderer seeking good company, our doors are open and the fire is always burning.";

  aboutCard.appendChild(aboutP1);
  aboutCard.appendChild(aboutP2);
  aboutCard.appendChild(aboutP3);
}

export{generateAbout};