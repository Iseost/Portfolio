const appHeader = document.getElementById("appHeader");


const logoLink = document.createElement("a");
logoLink.href = "./index.html";

const logoImg = document.createElement("img");
logoImg.className = "logo";
logoImg.src = "./assets/logoiselin.png";
logoImg.alt = "Logo";

logoLink.appendChild(logoImg);
appHeader.appendChild(logoLink);

const linkHeader = document.createElement("div");
linkHeader.className = "link_header flex";

const projectsLink = document.createElement("a");
projectsLink.href = "./project.html";
projectsLink.textContent = "My projects";

const linkedinLink = document.createElement("a");
linkedinLink.href = "https://www.linkedin.com/in/iselin-østerhus-engen-767b46284";
linkedinLink.textContent = "My Linkedin profile";

linkHeader.appendChild(projectsLink);
linkHeader.appendChild(linkedinLink);

appHeader.appendChild(linkHeader);
