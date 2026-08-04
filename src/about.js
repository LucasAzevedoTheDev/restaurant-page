const contentDiv = document.querySelector("#content");

function generateAbout() {
  contentDiv.style.display = "block";
  contentDiv.style.alignItems = "initial";
  contentDiv.style.justifyContent = "initial";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  contentDiv.appendChild(aboutContainer);

  const aboutCard = document.createElement("div");
  aboutCard.classList.add("about-card");
  aboutContainer.appendChild(aboutCard);
}

export{generateAbout};