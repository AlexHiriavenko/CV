let btnBurger = document.querySelector(".burger-btn");
const linkCert = document.querySelector(".cert");

btnBurger.addEventListener("click", handleBurger);

function handleBurger() {
    const headerMenu = document.querySelector(".nav-list");
    headerMenu.matches(".nav-list--active")
        ? headerMenu.classList.remove("nav-list--active")
        : headerMenu.classList.add("nav-list--active");
}

const modal = document.querySelector(".modal");
const certs = document.querySelectorAll(".img-cert");
const currentCert = document.querySelector(".modal-cert");
const btnCloseModal = document.querySelector(".btn-close-modal");

modal.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

for (const cert of certs) {
    cert.addEventListener("click", openModal);
}

function openModal(event) {
    event.stopPropagation();
    currentCert.src = event.target.src;
    modal.classList.add("active");
    removeScroll();
}

function closeModal(e) {
    if (!e.target.matches(".modal-cert")) {
        modal.classList.remove("active");
        currentCert.classList.remove("zoom");
        enableScroll();
    }
}

function removeScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "auto";
}
