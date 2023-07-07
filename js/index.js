const btnCode = document.querySelector(".code__btn");
const btnClose = document.querySelector(".close");
const btnBurger = document.querySelector(".burger-btn");
const linkCert = document.querySelector(".cert");
const headerLinks = document.querySelectorAll(".nav-link");

btnCode.addEventListener("click", onBtnCodeClick);

function onBtnCodeClick(e) {
    const codePreview = document.getElementById("code");
    codePreview.matches(".code-onClick")
        ? codePreview.classList.remove("code-onClick")
        : codePreview.classList.add("code-onClick");
}

btnClose.addEventListener("click", () => {
    const codePreview = document.getElementById("code");
    codePreview.classList.remove("code-onClick");
});

btnBurger.addEventListener("click", handleBurger);

function handleBurger() {
    const headerMenu = document.querySelector(".nav-list");
    headerMenu.matches(".nav-list--active")
        ? headerMenu.classList.remove("nav-list--active")
        : headerMenu.classList.add("nav-list--active");
}

headerLinks.forEach((link) => link.addEventListener("click", handleBurger));
