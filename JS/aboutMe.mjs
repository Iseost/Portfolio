// aboutMe.mjs
export function renderAboutMe() {
    const container = document.getElementById("aboutMe");

    // Wrapper som holder boblene
    const wrapper = document.createElement("div");
    wrapper.className = "relative flex flex-col items-center";

    /*** ØVRE SIRKEL: Bilde med gradient-ramme ***/
    const imageWrapper = document.createElement("div");
    imageWrapper.className =
        "p-4 rounded-full bg-gradient-to-tr from-[#F5C1C2] to-[#E7C098] z-10"; // høyere lag (foran)

    const img = document.createElement("img");
    img.src = "./assets/IMG_4336.JPG";
    img.alt = "Picture of me";
    img.className =
        "w-40 h-40 rounded-full object-cover border-5 border-white shadow-lg";

    imageWrapper.appendChild(img);

    /*** NEDRE SIRKEL: Fakta-boble med gradient ***/
    const factBubble = document.createElement("div");
    factBubble.className =
        "w-80 h-80 flex flex-col justify-center items-center rounded-full bg-gradient-to-tr from-[#F5C1C2] to-[#E7C098] shadow-lg p-6 text-white text-center transform -translate-y-10 translate-x-12";
    // flytter den litt opp (-y) og til høyre (x)

    const heading = document.createElement("h2");
    heading.className = "text-xl font-bold mb-2";
    heading.textContent = "Fun Facts";

    const list = document.createElement("ul");
    list.className = "space-y-1 text-base";

    const facts = [
        "Tolkien ❤️",
        "Coffee ☕",
        "Music (metal) 🎸",
        "Knitting, baking and lego 🧶🍰🧱",
        "Orange cats 🐱",
        "Team vans/converse 👟",
    ];

    facts.forEach((fact) => {
        const li = document.createElement("li");
        li.textContent = fact;
        list.appendChild(li);
    });

    factBubble.appendChild(heading);
    factBubble.appendChild(list);

    /*** Sett sammen alt ***/
    wrapper.appendChild(imageWrapper);
    wrapper.appendChild(factBubble);

    container.appendChild(wrapper);
}

renderAboutMe();
