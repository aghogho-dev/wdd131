document.addEventListener('DOMContentLoaded', () => {

    const getYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified")



    const today = new Date();

    getYear.innerHTML = `${today.getFullYear()}`;

    lastModified.innerHTML = `Last Modification: 
    ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    const products = [
        {
            id: 'fc-1888',
            name: "Flux Capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "Power Laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "Time Circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "Low Voltage Reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "Warp Equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.getElementById('product-name');
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Choose a Product...';
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    productSelect.appendChild(defaultOption);

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    
    const reviewsDisplay = document.querySelector(".reviews");

    let numberReviews = Number(window.localStorage.getItem("number-reviews")) || 0;

    if (numberReviews !== 0) {
        reviewsDisplay.textContent = numberReviews;
    } else {
        reviewsDisplay.textContent = `This is your first review. 🥳 Thanks!`; 
    }

    numberReviews++;

    localStorage.setItem("number-reviews", numberReviews);
});
