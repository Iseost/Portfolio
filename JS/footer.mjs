const appFooter = document.getElementById("appFooter");

// Clear existing content if any
appFooter.innerHTML = "";

// Create and append logo image
const footerLogo = document.createElement("img");
footerLogo.className = "logo";
footerLogo.src = "./assets/logoiselin.png";
footerLogo.alt = "Logo";

appFooter.appendChild(footerLogo);

// Create and append copyright
const copyright = document.createElement("p");
copyright.innerHTML = "&copy; Iselin Engen";

appFooter.appendChild(copyright);
