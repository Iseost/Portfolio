// js/components/projects.mjs
export function renderProjectsOverview() {
    const container = document.getElementById("appMain");
    container.innerHTML = "";

    const projects = [
        {
            title: "School projects",
            description: "Assignments and semester projects from school.",
            img: "./assets/19199262.jpg",
            buttonId: "schoolProjectsButton",
            targetPage: "./projects/project-school.html",
        },
        {
            title: "Private projects",
            description: "Personal projects I've been working on.",
            img: "./assets/Group-5.jpg",
            buttonId: "privateProjectsButton",
            targetPage: "./projects/project-private.html",
        },
    ];

    const section = document.createElement("section");
    section.className = "grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12";

    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-md rounded-xl overflow-hidden transition hover:scale-105 duration-200";
        card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" class="w-full h-48 object-cover"/>
      <div class="p-4 space-y-3">
        <h2 class="text-xl font-semibold">${p.title}</h2>
        <p class="text-sm leading-relaxed">${p.description}</p>
        <button id="${p.buttonId}" class="bg-[#E1B07E] text-gray-800 font-semibold px-4 py-2 rounded hover:bg-[#E7C098] transition-colors">
          Explore Projects
        </button>
      </div>
    `;
        section.appendChild(card);
    });

    container.appendChild(section);
}
