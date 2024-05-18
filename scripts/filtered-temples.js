const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Brisbane Australia",
        location: "Brisbane, Australia",
        dedicated: "2003, June 15",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/800x500/brisbane-australia-temple-lds-745088-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January 17",
        area: 17683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/800x500/buenos-aires-argentina-temple-lds-236979-wallpaper.jpg"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May 17",
        area: 48100,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/800x500/campinas-brazil-temple-lds-930766-wallpaper.jpg",
    },
    {
        templeName: "Edmonton Alberta",
        location: "Edmonton, Alberta, Canada",
        dedicated: "1986, January 17",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/edmonton-alberta/800x500/edmonton-alberta-temple-winter-1130269-wallpaper.jpg",
    },
];


document.addEventListener("DOMContentLoaded", () => {
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
    });

    const section = document.querySelector("section");

    function createTemple(templesList) {

        section.innerHTML = "";

        templesList.forEach((temple) => {
            let card = document.createElement("div");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");
        
        
            name.textContent = temple.templeName;
            location.innerHTML = `<br><span class=text-color>Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class=text-color>Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class=text-color>Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");
        
            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);
        
            section.appendChild(card);  
        });  
    }

    createTemple(temples);

    function filterTemples(filter) {
        switch (filter) {
            case "old":
                createTemple(temples.filter(temple => new Date(temple.dedicated) < new Date("1900-01-01")));
                break;
            case "new":
                createTemple(temples.filter(temple => new Date(temple.dedicated) >= new Date("2000-01-01")));
                break
            case "large":
                createTemple(temples.filter(temple => temple.area > 90000));
                break
            case "small":
                createTemple(temples.filter(temple => temple.area < 10000));
                break;
            default:
                createTemple(temples);
                break;
        }
    }

    document.querySelectorAll("nav a").forEach(a => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.id;
            filterTemples(filter);
        });
    });
});


  
  
  





const home = document.querySelector("#home");
const old = document.querySelector("#old");
const news = document.querySelector("#new")
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", createTemple(temples));

// const oldTemples = temples.filter(obj => obj.dedicated >= "1900, January 1");
// old.addEventListener("click", createTemple(oldTemples));

