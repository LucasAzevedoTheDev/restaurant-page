const contentDiv = document.querySelector("#content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

function generateMenu() {
  contentDiv.innerHTML = "";

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("menu-header");
  contentDiv.appendChild(headerDiv);

  const h1Text = document.createElement("h1");
  h1Text.textContent = "The Nordic Menu";
  headerDiv.appendChild(h1Text);
}

export {generateMenu}