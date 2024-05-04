const getYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

getYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: 
${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;


const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.classList.toggle("open");
})

