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

  const contactCard1 = document.createElement("div");
  
  const contactCard1Head = document.createElement("h3");
  contactCard1Head.textContent = "Location & Hours";

  const contactCard1P1 = document.createElement("p");
  contactCard1P1.textContent = "442 Emberwood Trail, Northern Ridge";

  const contactCard1P2 = document.createElement("p");
  contactCard1P2.textContent = "Tuesday – Sunday: 5:00 PM – 11:00 PM";

  const contactCard1P3 = document.createElement("p");
  contactCard1P3.textContent = "(Mondays closed for wood gathering)";

  contactCard1.appendChild(contactCard1Head);
  contactCard1.appendChild(contactCard1P1);
  contactCard1.appendChild(contactCard1P2);
  contactCard1.appendChild(contactCard1P3);
  contactContainer.appendChild(contactCard1);
  
}

export {generateContact};