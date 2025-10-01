// aboutMe.mjs
export function renderAboutMe() {
  const container = document.getElementById("appMain");

  const section = document.createElement("section");
  section.className = "flex flex-col md:flex-row items-center gap-8 mb-12";

  const textWrapper = document.createElement("div");
  textWrapper.className = "flex-1 space-y-4";
  textWrapper.innerHTML = `
    <h1 class="text-4xl font-bold">Hi everyone,</h1>
    <h2 class="text-2xl">I'm Iselin!</h2>
    <p>I'm a frontend development student in my final semester — graduation
      is just around the corner this December. I spend my days turning
      ideas into interactive interfaces, and my nights figuring out how to
      make them even better. I'm always learning, experimenting, and
      refining my skills — whether I'm coding solo or teaming up on
      projects.</p>
    <p>👇 Take a look at some of the things I’ve built along the way!</p>
    <button id="latestProjectsButton" class="bg-[#E1B07E] text-gray-800 font-semibold px-4 py-2 rounded hover:bg-[#E7C098] transition-colors">
      Take a Peek at My Work
    </button>
  `;

  const aboutMeWrapper = document.createElement("div");
  aboutMeWrapper.className = "flex-1 flex justify-center";

  const wrapper = document.createElement("div");
  wrapper.className = "relative flex flex-col items-center";

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "p-4 rounded-full bg-gradient-to-tr from-[#F5C1C2] to-[#E7C098] z-10";
  const img = document.createElement("img");
  img.src = "./assets/IMG_4336.JPG";
  img.alt = "Picture of me";
  img.className = "w-40 h-40 rounded-full object-cover border-5 border-white shadow-lg";
  imageWrapper.appendChild(img);

  const factBubble = document.createElement("div");
  factBubble.className = "w-80 h-80 flex flex-col justify-center items-center rounded-full bg-gradient-to-tr from-[#F5C1C2] to-[#E7C098] shadow-lg p-6 text-white text-center transform -translate-y-10 translate-x-12";

  const heading = document.createElement("h2");
  heading.className = "text-xl font-bold mb-2";
  heading.textContent = "Fun Facts";

  const list = document.createElement("ul");
  list.className = "space-y-1 text-base";

  const facts = ["Tolkien ❤️", "Coffee ☕", "Music (metal) 🎸", "Knitting, baking and lego 🧶🍰🧱", "Orange cats 🐱", "Team vans/converse 👟"];
  facts.forEach(f => { const li = document.createElement("li"); li.textContent = f; list.appendChild(li); });

  factBubble.append(heading, list);
  wrapper.append(imageWrapper, factBubble);
  aboutMeWrapper.appendChild(wrapper);

  section.append(textWrapper, aboutMeWrapper);
  container.appendChild(section);
}
