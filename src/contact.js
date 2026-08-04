const contentDiv = document.querySelector("#content");

function generateContact() {
  // Reset #content style
  contentDiv.innerHTML = "";
  contentDiv.style.display = "block";
  contentDiv.style.alignItems = "initial";
  contentDiv.style.justifyContent = "initial";
  contentDiv.style.height = "83vh";

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");
  contentDiv.appendChild(contactHeader);

  const contactH1 = document.createElement("h1");
  contactH1.textContent = "Visit The Hearth";

  const contactHead = document.createElement("p");
  contactHead.textContent = "Step inside, grab a seat, and share the fire with us.";

  contactHeader.appendChild(contactH1);
  contactHeader.appendChild(contactHead);

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contentDiv.appendChild(contactContainer);

  
}

export {generateContact};