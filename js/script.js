
const header = document.querySelector(".site-header");
const botonMovil = document.querySelector(".boton-movil");
const movilBarra = document.querySelector(".movil-barra");
const enlacesMoviles = document.querySelectorAll(".movil-link");
const abrirPrivacidad = document.getElementById("abrir-privacidad");
const privacidad = document.getElementById("privacidad");
const cerrarPrivacidad = document.querySelectorAll(".dialog-cerrar, .dialog-cerrar-icono");
const anio = document.getElementById("anio");

function actualizarCabecera() {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
}
actualizarCabecera();
window.addEventListener("scroll", actualizarCabecera, { passive: true });


function cerrarMenu() {
    if (!botonMovil || !movilBarra) return;
    botonMovil.setAttribute("aria-expanded", "false");
    botonMovil.setAttribute("aria-label", "Abrir menú");
    movilBarra.classList.remove("is-open");
    header?.classList.remove("menu-abierto");
    movilBarra.setAttribute("inert", "");
    document.body.classList.remove("menu-abierto");
}

function abrirMenu() {
    if (!botonMovil || !movilBarra) return;
    botonMovil.setAttribute("aria-expanded", "true");
    botonMovil.setAttribute("aria-label", "Cerrar menú");
    movilBarra.classList.add("is-open");
    header?.classList.add("menu-abierto");
    movilBarra.removeAttribute("inert");
    document.body.classList.add("menu-abierto");
}

botonMovil?.addEventListener("click", () => {
    const menuAbierto = botonMovil.getAttribute("aria-expanded") === "true";
    menuAbierto ? cerrarMenu() : abrirMenu();
});

enlacesMoviles.forEach((enlace) => enlace.addEventListener("click", cerrarMenu));
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) cerrarMenu();
});
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarMenu();
});

if (anio) anio.textContent = new Date().getFullYear();
