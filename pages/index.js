let btnBurger = document.querySelector(".burger-btn");
const linkCert = document.querySelector(".cert");

btnBurger.addEventListener("click", handleBurger);

function handleBurger() {
    const headerMenu = document.querySelector(".nav-list");
    headerMenu.matches(".nav-list--active")
        ? headerMenu.classList.remove("nav-list--active")
        : headerMenu.classList.add("nav-list--active");
}
