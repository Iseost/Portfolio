export function renderHeader() {
    const appHeader = document.getElementById("appHeader");
    appHeader.className = "flex flex-col items-center justify-center text-center py-6 bg-white";

    const logoLink = document.createElement("a");
    logoLink.href = "../index.html";

    const logoImg = document.createElement("img");
    logoImg.className = "logo w-34 h-auto mb-4";
    logoImg.src = "../assets/logoiselin.png";
    logoImg.alt = "Logo";

    logoLink.appendChild(logoImg);
    appHeader.appendChild(logoLink);

    const linkHeader = document.createElement("div");
    linkHeader.className = "link_header flex flex-col md:flex-row gap-4 text-lg";

    const projectsLink = document.createElement("a");
    projectsLink.href = "../project.html";
    projectsLink.textContent = "My projects";
    projectsLink.className = "text-gray-600 font-bold hover:underline";

    const linkedinLink = document.createElement("a");
    linkedinLink.href = "https://www.linkedin.com/in/iselin-østerhus-engen-767b46284";
    linkedinLink.textContent = "My Linkedin profile";
    linkedinLink.className = "text-gray-600 font-bold hover:underline";

    linkHeader.append(projectsLink, linkedinLink);
    appHeader.appendChild(linkHeader);

}
