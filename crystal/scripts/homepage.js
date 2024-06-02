const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.classList.toggle("open");
});


const imageWrapper = document.querySelector("#image-wrapper");
const imageTop = document.querySelector("#image-top");
const imageBottom = document.querySelector("#image-bottom");

imageWrapper.addEventListener("mouseover", () => {
    imageTop.style.opacity = "0";
    imageBottom.style.opacity = "1";
});

imageWrapper.addEventListener('mouseout', () => {
    imageTop.style.opacity = '1';
    imageBottom.style.opacity = '0';
});


const getYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")
const today = new Date();

getYear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: 
${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

