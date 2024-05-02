// myInfo = {
//     name: "Brother T",
//     photo: "images/profile.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years",
//         },
//         {
//             place: "Ammon, ID",
//             length: "3 years",
//         },
//         {
//             place: "Sandy, UT",
//             length: "1 year",
//         },
//     ],
// };

// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods[3];

// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);


// const foodsElement = document.querySelector("#favorite-goods");
// function createAndAppendFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }

// myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


// const chopElement = document.querySelector("#favorite-chops");
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }

// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// chopElement.innerHTML = foodlistElements.join("");


// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//         if (selectObject.options[i].selected) numberSelected++;
//     }
//     return numberSelected;
// }

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have seleced ${countSelected(musicTypes)} options(s).`);
// });



// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//     console.log("Outer loops:", x);
//     x += 1;
//     z = 1;

//     while (true) {
//         console.log("Inner loops:", z);
//         z += 1;
//         if (z === 10 && x === 10) {
//             break labelCancelLoops;
//         } else if (z === 10) {
//             break;
//         }
//     }
// }


// let i = 0;
// let n = 0;
// while (i < 5) {
//     i++;
//     if (i === 3) {
//         continue
//     }
//     n += i;
//     console.log(n);
// }


// function dumpPromps(obj, objName) {
//     let result = "";
//     for (const i in obj) {
//         result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += "<hr>";
//     return result;
// }

// car = {make: "Ford", model: "Mustang"};

// console.log(dumpPromps(car, "car"));


// const arr = [3, 5, 7];
// arr.fob = "hello";

// console.log(arr);

// for (const i in arr) { console.log(i); }

// for (const i of arr) { console.log(i); }


// const obj = { foo: 1, bar: 2 };

// for (const [key, val] of Object.entries(obj)) {
//     console.log(key, val);
// }


// const DAYS = 6;
// const LIMIT = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }

// let i = 0;
// while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
//     i++;
// }

// studentReport.forEach((item) => {
//     if (item < LIMIT) console.log(item);
// })

// for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) console.log(studentReport[i]);
// }


// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs[0].nodeName);

// window.onload() = () => {
//     const heading = document.createElement("h1");
//     heading.textContent = `Big Head!`;
//     document.body.appendChild(heading);

// }

// const bod = document.getElementsByName("body");

// window.addEventListener("load", () => {
//     const heading = document.createElement("h1");
//     // const headingText = document.createTextNode("Big Head!");
//     heading.textContent = "Big Tail!"
//     // heading.textContet = "Big Head!";
//     // heading.appendChild(headingText);
//     document.body.appendChild(heading);
// })


// const story = document.body.querySelector(".story");
// const setText = document.body.querySelector("#set-text");
// const clearText = document.body.querySelector("#clear-text");

// setText.addEventListener("click", () => {
//     const genText = document.createTextNode("It was a dark and stormy night...");
//     story.appendChild(genText);
// })

// clearText.addEventListener("click", () => {
//     const clearText = document.createTextNode("...");
//     story.textContent = "";
// })


// const parent = document.body.querySelector(".parent");
// const addChild = document.body.querySelector("#add-child");

// addChild.addEventListener("click", () => {
//     if (parent.childNodes.length > 1) return;

//     const child = document.createElement("div");
//     child.classList.add("child");
//     child.textContent = "child";
//     parent.appendChild(child);
// });

// const removeChild = document.body.querySelector("#remove-child");
// removeChild.addEventListener("click", () => {
//     const child = document.body.querySelector(".child");
//     parent.removeChild(child);
// })




// const list = document.getElementById("shoppingList");
// const input = document.getElementById("item");
// const addButton = document.getElementById("addBtn");


// addButton.addEventListener("click", () => {
//     const inputValue = input.value;
//     input.value = "";

//     const listItem = document.createElement("li");
//     const itemText = document.createElement("span");
//     const delButton = document.createElement("button");

//     listItem.appendChild(itemText);
//     listItem.appendChild(delButton);

//     itemText.textContent = inputValue;
//     delButton.textContent = "Delete";

//     list.appendChild(listItem);

//     delButton.addEventListener("click", () => {
//         list.removeChild(listItem);
//     });

//     input.focus();
// });


const reveal1 = document.querySelector("#div-1");
const reveal2 = document.querySelector("#div-2");
const reveal3 = document.querySelector("#div-3");
const reveal4 = document.querySelector("#div-4");

const babygender = "m";

reveal1.textContent = `1. 🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
reveal2.innerHTML = `2. 🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
reveal3.HTMLvalue = `3. 🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;
reveal4.text = `4. 🎉 Congratulations! You are having a <strong>${babygender}</strong>!`;


reveal1.style.setProperty("font-weight", "700");
reveal2.style.fontWeight = 700;