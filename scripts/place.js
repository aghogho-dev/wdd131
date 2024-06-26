const getYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

getYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: 
${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;


const windChill = document.querySelector("#windChill");
const condition = document.querySelector("#cdn");

function calculateWindChill(celsius, windKmh) {
    
    if (celsius > 10 || windKmh <= 4.8)
    {
        return Math.NaN;
    }

    const windchill = (
        13.12 + 0.6215 * celsius - 11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * celsius * Math.pow(windKmh, 0.16)
    );

    return windchill;
}

const windChillValue = Math.round(calculateWindChill(10, 5));

windChill.innerHTML = `${windChillValue}<sup>∘</sup>C`;

function Condition(windChillValue) {
    return ((windChillValue > 4) ? "Normal" : 
        (0 < windChillValue <= 4) ? "Cool" :
        (-9 < windChillValue <= 0) ? "Cold" :
        (-18 <= windChillValue <= -10) ? "Vey Cold" :
        (-29 <= windChillValue <= -19) ? "Extremely Cold" : "Dangerously Cold"
    );
}

condition.textContent = Condition();