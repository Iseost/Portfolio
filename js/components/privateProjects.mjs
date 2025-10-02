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
                        "A personal hobby project where I designed and built a wedding invitation website using HTML, TailwindCSS, and JavaScript. Instead of sending a traditional paper invitation, I wanted to create something interactive and personal, applying the skills I had learned to make a simple, elegant, and functional online invitation for friends and family.",
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
        h1.className = "text-4xl font-semibold mb-10";
        h1.textContent = sectionData.year;
        main.appendChild(h1);

        const section = document.createElement("section");
        section.className = "grid gap-8 md:grid-cols-2 lg:grid-cols-3";

        sectionData.projects.forEach(p => {
            const card = document.createElement("div");
            card.className = "bg-white shadow-md rounded-xl overflow-hidden";

            // Kort beskrivelse
            const shortDesc = p.description.slice(0, 150) + "...";

            card.innerHTML = `
                <img src="${p.img}" alt="Screenshot of ${p.title}" class="w-full object-cover"/>
                <div class="p-4 space-y-3">
                  <h2 class="text-xl font-semibold">${p.title}</h2>
                  <p class="text-sm leading-relaxed">
                    <span class="description inline">${shortDesc}</span>
                    <button class="text-gray-600 font-semibold hover:underline read-more-btn inline">Read more</button>
                  </p>
                  <div class="flex gap-4 mt-2">
                    <a class="text-gray-600 font-bold hover:underline" href="${p.repo}" target="_blank">Repository</a>
                    <a class="text-gray-600 font-bold hover:underline" href="${p.site}" target="_blank">Website</a>
                  </div>
                </div>
            `;

            // Read more / Show less funksjon
            const btn = card.querySelector(".read-more-btn");
            const descSpan = card.querySelector(".description");
            let expanded = false;

            btn.addEventListener("click", () => {
                if (!expanded) {
                    descSpan.textContent = p.description;  // vis full tekst
                    btn.textContent = "Show less";         // endre knapptekst
                    expanded = true;
                } else {
                    descSpan.textContent = shortDesc;     // gå tilbake til kort tekst
                    btn.textContent = "Read more";        // endre tilbake knapptekst
                    expanded = false;
                }
            });

            section.appendChild(card);
        });

        main.appendChild(section);
    });

    container.appendChild(main);
}
