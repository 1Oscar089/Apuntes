let menu = [
    {nombre: "Inicio", link: "../index.html"},
    {nombre: "Linux consola", link: "../pages/linux_consola.html"},
];
let nav = document.getElementById("nav");
const ul = document.createElement("ul");
menu.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.nombre;
    li.addEventListener("click", () => {
        window.location.href = item.link;
    });
    ul.appendChild(li);
});
const span = document.createElement("span");
span.innerHTML = "&#9776;";
nav.appendChild(span);
nav.appendChild(ul);
