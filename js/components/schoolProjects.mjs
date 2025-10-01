// js/components/schoolProjects.mjs
export function renderSchoolProjects() {
    const container = document.getElementById("appMain");
    container.innerHTML = "";

    const portfolio = [
        {
            year: "First year",
            projects: [
                {
                    title: "GameHub",
                    description:
                        "My first project using HTML and CSS as a frontend student. The project involved creating a functional website for a fictional game store.",
                    img: "../assets/gamehub.png",
                    repo: "https://github.com/Iseost/Gamehub.git",
                    site: "https://gamehub-iselin.netlify.app",
                },
                {
                    title: "Stavanger Science Museum",
                    description:
                        "My second project, semester project, using HTML, CSS and my design skills. The project involved creating a functional website for a fictional science museum.",
                    img: "../assets/museum.png",
                    repo: "https://github.com/Iseost/Iseost.github.io.git",
                    site: "https://iseost.github.io/",
                },
                {
                    title: "HotView Labs",
                    description:
                        "Project exam, where I was required to use all of the skills that you have learned my first year at frontend development. The website is a fictional company and build using HTML, CSS and JavaScript.",
                    img: "../assets/hotview.png",
                    repo: "https://github.com/NoroffFEU/FED1-PE1-Iseost.git",
                    site: "https://fed1-pe1-iseost.netlify.app/",
                },
            ],
        },
        {
            year: "Second year",
            projects: [
                {
                    title: "Auction House",
                    description:
                        "Semester project on my second year in frontend development, where I used HTML, TailwindCSS and JavaScript. The project involved creating a fully functional auction website.",
                    img: "../assets/Skjermbilde 2025-08-21 100455.png",
                    repo: "https://github.com/Iseost/Auction-House",
                    site: "https://auctionhouse-sp2.netlify.app/",
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
