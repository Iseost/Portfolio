// js/components/privateProjects.mjs
export function renderPrivateProjects() {
    const container = document.getElementById("appMain");
    container.innerHTML = "";

    const portfolio = [
        {
            year: "Private Projects",
            projects: [
                {
                    title: "Wedding invitation website",
                    description:
                        "A personal project where I designed and built a wedding invitation using HTML, TailwindCSS, and JavaScript.",
                    img: "../assets/Skjermbilde 2025-09-30 091827.png",
                    repo: "https://github.com/Iseost/Morten-Iselin",
                    site: "https://mortenogiselin.no/",
                },
            ],
        },
    ];

    const main = document.createElement("main");
    main.className = "max-w-5xl mx-auto p-6 space-y-12";

    portfolio.forEach(sectionData => {
        const h1 = document.createElement("h1");
        h1.className = "text-4xl font-bold mb-6";
        h1.textContent = sectionData.year;
        main.appendChild(h1);

        const section = document.createElement("section");
        section.className = "grid gap-8 md:grid-cols-2 lg:grid-cols-3";

        sectionData.projects.forEach(p => {
            const card = document.createElement("div");
            card.className = "bg-white shadow-md rounded-xl overflow-hidden";

            card.innerHTML = `
        <img src="${p.img}" alt="Screenshot of ${p.title}" class="w-full object-cover"/>
        <div class="p-4 space-y-3">
          <h2 class="text-xl font-semibold">${p.title}</h2>
          <p class="text-sm leading-relaxed">${p.description}</p>
          <div class="flex gap-4">
            <a class="text-gray-600 font-bold hover:underline" href="${p.repo}" target="_blank">Repository</a>
            <a class="text-gray-600 font-bold hover:underline" href="${p.site}" target="_blank">Website</a>
          </div>
        </div>
      `;
            section.appendChild(card);
        });

        main.appendChild(section);
    });

    container.appendChild(main);
}
