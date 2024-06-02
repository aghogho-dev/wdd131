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


const menuItems = [
    {
        type: "forward",
        name: "THE OTHER WOMAN",
        description: "Illegal Mezcal, Laphroaig 10yr Islay Scotch, Blackened Bird’s Eye Chili Tincture, Grapefruit Bitters, Agave",    
    },
    {
        type: "forward",
        name: "TAJ EMINENCE",
        description: "Tanduay Rum, Chinola, Hibiscus, Rose Combier, Lime",
    },
    {
        type: "forward",
        name: "TAPACHE",
        description: "Dulce Vida, Jalapeno-Pineapple, Watermelon, Lime, Agave, Blue Curacao",
    },
    {
        type: "forward",
        name: "GOLD NEGRONI",
        description: "Jaisalmer Gin, Spiced Saffron Liqueur, Dry Vermouth",  
    },
    {
        type: "forward",
        name: "SUITORS",
        price: 20,
        description: "Hendricks Flora, Aperol, Strawberry, Rosemary, Lemon, Eau de Rose, Simple, Prosecco",
    },

    {
        type: "shy",
        name: "THE LYCHEE LIBRA",
        description: "Rosemary Infused Butterfly Pea Tea, Lychee, Lemonade",
    },

    {
        type: "shy",
        name: "MANGO MALAI",
        description: "Mango Puree, Yogurt",
    },

    {
        type: "shy",
        name: "KOKUM MOJITO",
        description: "Kokum, Mint, Lime, Simple, Soda",
    },

    {
        type: "shy",
        name: "COCO-LICIOUS",
        description: "Coconut Puree, Lime, Simple, Cardamom",
    },
];

const getForward = document.querySelector(".forward");
const getShy = document.querySelector(".shy");


menuItems.forEach(item => {
    const createDiv = document.createElement("div");
    const createNameP = document.createElement("p");
    const createDescP = document.createElement("p");

    createNameP.textContent = item.name;
    createNameP.classList.add("name-items");

    createDescP.textContent = item.description;


    if (item.type === "forward")
    {
        createDiv.appendChild(createNameP);
        createDiv.appendChild(createDescP);
        getForward.appendChild(createDiv);
    }
    else if (item.type === "shy")
    {
        createDiv.appendChild(createNameP);
        createDiv.appendChild(createDescP);
        getShy.appendChild(createDiv);
    }
})
