document.addEventListener('DOMContentLoaded', () => {

    const getYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified")
    const today = new Date();

    getYear.innerHTML = `${today.getFullYear()}`;

    lastModified.innerHTML = `Last Modification: 
    ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;


    const nav = document.querySelector("nav");
    const menuBtn = document.querySelector("#menu-btn");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("open");
    });
    
    const reviewsDisplay = document.querySelector(".crystal-form");

    let numberSubmitted = Number(window.localStorage.getItem("number-forms")) || 0;

    numberSubmitted++;

    if (numberSubmitted > 1) {
        reviewsDisplay.textContent = `${numberSubmitted} reservations and enquiries`;
    } else {
        reviewsDisplay.textContent = `This is your first submission. 🥳 Thanks!`; 
    }

    localStorage.setItem("number-forms", numberSubmitted);
});