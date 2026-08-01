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
  menuContainer.appendChild(headerDiv);

  const h1Text = document.createElement("h1");
  h1Text.textContent = "The Nordic Menu";
  headerDiv.appendChild(h1Text);
}

export {generateMenu}