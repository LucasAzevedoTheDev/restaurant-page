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

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  contentDiv.appendChild(contactHeader);
  contentDiv.appendChild(contactContainer);
  
}

export {generateContact};