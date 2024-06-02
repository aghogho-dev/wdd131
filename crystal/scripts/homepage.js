const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.classList.toggle("open");
})