const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);

function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++)
    {
        if (num % i === 0)
        {
            return false;
        }
    }
    return num > 1;
}

const isprime = array.filter(isPrime);

const arr = [
    {id: 15},
    {id: -1},
    {id: 0},
    {id: 3},
    {id: 12.2},
    {},
    {id: null},
    {id: NaN},
    {id: "undefined"},
];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

const arrByID = arr.filter(filterByID);

const fruits = ["apple", "banana", "grapes", "mango", "oranges"];

function filterItems(arr, query) {
    return arr.filter((el) => 
        el.toLowerCase().includes(query.toLowerCase())
    );
}


const names = ["JC63", "Bob132", "Ursula89", "Ben96"];

const greatIDs = names
    .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
    .filter((id, idx, arr) => {
        if (idx > 0 && id <= arr[idx - 1]) return false;
        if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
        return true;
    });


const arrayLike = {
    length: 4,
    0: "a",
    1: "b",
    2: "c",
    3: "a",
}

const arrLike = Array.prototype.filter.call(arrayLike, (x) => x <= "b");


const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

const kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

const reformArray = kvArray.map(({key, value}) => ({[key]: value}));

const al = ["1", "2", "3"].map((str) => parseInt(str, 10));

const am = ["1", "2", "3"].map(Number);

const ap = ["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10));

const numbers1 = [1, 2, 3, 4];
const filteredNumbers = numbers1.map((num, index) => {
    if (index < 3) return num;
});

const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
    total += cost;
    return cost * 1.2;
})

const total1 = cart.reduce((acc, cost) => acc + cost, 0);
const withTax1 = cart.map((cost) => cost * 1.2);

const products = [
    {name: "sports car"},
    {name: "laptop"},
    {name: "phone"},
];

// products.map((product) => {
//     product.price = 100
// })

products.forEach((product) => {
    product.price = 100;
})

const productsWithPrice = products.map((product) => {
    return {...product, price: 100};
})

const numbers2 = [3, -1, 1, 4, 1, 5, 9, 2, 6];

const average = numbers2
    .filter((num) => num > 0)
    .map((num, idx, arr) => {
        const prev = arr[idx - 1];
        const next = arr[idx + 1];
        let count = 1;
        let total = num;
        if (prev !== undefined) {
            count++;
            total += prev;
        }
        if (next !== undefined) {
            count++;
            total += next;
        }
        const average = total / count;

        return Math.round(average * 100) / 100;
    });

const bd = [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
});

const arr5 = [1, 2, 3, 4];

const init = 0;

const sumWithInit = arr5.reduce(
    (accumulator, current) => accumulator + current, init,
    );


const getMax = (a, b) => Math.max(a, b);

const r1 = [1, 100].reduce(getMax, 50);
const r2 = [50].reduce(getMax, 10);


const arr6 = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

const r3 = arr6.reduce(reducer);

const objs = [{x: 1}, {x: 2}, {x: 3}];
const sums = objs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x, 0,
);

const pipe = 
    (...functions) =>
    (initialValue) =>
        functions.reduce((acc, fn) => fn(acc), initialValue);

const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

const mul6 = pipe(double, triple);
const mul9 = pipe(triple, triple);
const mul16 = pipe(quadruple, quadruple);
const mul24 = pipe(double, triple, quadruple);


const asyncPipe = 
    (...functions) =>
    (initialValue) =>
        functions.reduce((acc, fn) => acc.then(fn),
        Promise.resolve(initialValue));

const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;

const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log);

const asyncPipe2 =
    (...functions) =>
    (initialValue) =>
        functions.reduce(async (acc, fn) => fn(await acc), initialValue);


// const names2 = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// const countedNames = Object.create(null);
// for (const name of names2) {
//     const currCount = countedNames[name] ?? 0;
//     countedNames[name] = currCount + 1;
// }

// const flattened = array.reduce((acc, cur) => acc.concat(cur));
// const flattened2 = array.flat();

let names3 = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names3.filter(name => name.charAt(0) === "B");
let namesL = names3.map((name) => name.length);
let namesR = names3.reduce((total, name) => total + name.length, 0) / names.length;


const steps = ["one", "two", "three"];
const stepsHTML = steps.map(function (step) {
    return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = stepsHTML.join("");


const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") points = 4;
    else if (grade === "B") points = 3;
    else points = 0;

    return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const gpa2 = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);