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
                        "My very first project as a frontend student using HTML and CSS. For this project, I planned, designed, and built a functional website for a fictional game store. Since it was my first website, I was still learning many aspects of web development, but I focused on creating a clear layout, basic styling, and intuitive navigation while experimenting with different design ideas. This project gave me valuable hands-on experience and a deeper understanding of how HTML and CSS work together to build a website.",
                    img: "../assets/gamehub.png",
                    repo: "https://github.com/Iseost/Gamehub.git",
                    site: "https://gamehub-iselin.netlify.app",
                },
                {
                    title: "Stavanger Science Museum",
                    description:
                        "My second project, completed as a semester assignment, using HTML, CSS, and my growing design skills. For this project, I planned, designed, and built a functional website for a fictional science museum. Compared to my first project, I was able to implement a more structured layout, improved styling, and better navigation, though I was still learning and experimenting with web development concepts.",
                    img: "../assets/museum.png",
                    repo: "https://github.com/Iseost/Iseost.github.io.git",
                    site: "https://iseost.github.io/",
                },
                {
                    title: "HotView Labs",
                    description:
                        "Project exam where I applied all the skills I had learned during my first year of frontend development. For this project, I planned, designed, and built a functional website for a fictional company, using HTML, CSS, and JavaScript for the first time. This project allowed me to combine layout, styling, interactivity, and basic scripting, giving me valuable experience in creating more dynamic and interactive websites. It was a significant step in my learning journey, as I was able to see how different web technologies work together to create a complete user experience. I also learned a lot about project planning and execution, which will be beneficial for my future projects.",
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
                        "My first project exam of the second year in frontend development, where I applied HTML, TailwindCSS, and JavaScript. For this project, I planned, designed, and built a fully functional auction website. I am very proud of this project, as I invested a lot of time and effort, and it reflects the skills and knowledge I had developed by this stage, including responsive design, interactive features, and polished styling. The project was both challenging and rewarding, allowing me to enhance my problem-solving abilities and gain confidence in my web development skills. It was a significant milestone in my learning journey, showcasing my growth as a frontend developer.",
                    img: "../assets/Skjermbilde 2025-08-21 100455.png",
                    repo: "https://github.com/Iseost/Auction-House",
                    site: "https://auctionhouse-sp2.netlify.app/",
                },
                {
                    title: "BrightCart",
                    description:
                        "This project was built using React, Vite, and TailwindCSS. It was part of a school assignment designed to demonstrate the skills and knowledge I gained during the JavaScript Frameworks course. The task included specific requirements outlining what the website needed to include, and the goal was to apply best practices in modern frontend development while creating a functional and visually consistent application.",
                    img: "../assets/Skjermbilde 2025-10-06 174907.png",
                    repo: "https://github.com/Iseost/online-store-assigment",
                    site: "https://brightcart.netlify.app/",
                }
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



            const btn = card.querySelector(".read-more-btn");
            const descSpan = card.querySelector(".description");
            let expanded = false;

            btn.addEventListener("click", () => {
                if (!expanded) {
                    descSpan.textContent = p.description;
                    btn.textContent = "Show less";
                    expanded = true;
                } else {
                    descSpan.textContent = shortDesc;
                    btn.textContent = "Read more";
                    expanded = false;
                }
            });

            section.appendChild(card);
        });



        main.appendChild(section);
    });

    container.appendChild(main);
}
