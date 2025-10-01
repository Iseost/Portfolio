// footer.mjs
export function renderFooter() {
    const appFooter = document.getElementById("appFooter");

    appFooter.className = " bg-white flex flex-col items-center justify-center text-center py-6";

    const footerLogo = document.createElement("img");
    footerLogo.className = "logo w-24 h-auto mb-4";
    footerLogo.src = "../assets/logoiselin.png";
    footerLogo.alt = "Logo";

    appFooter.appendChild(footerLogo);

    const copyright = document.createElement("p");
    copyright.innerHTML = "&copy; Iselin Engen";
    copyright.className = "text-gray-600 text-sm";

    appFooter.appendChild(copyright);
}
