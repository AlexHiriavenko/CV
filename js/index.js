const btnCode = document.querySelector(".code__btn");
const btnClose = document.querySelector(".close");

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
