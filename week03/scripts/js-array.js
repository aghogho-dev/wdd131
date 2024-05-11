// let scores = [100, 72, 83, 94, 88, 87];
// let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana'];

// scores[0] = 99;

// console.log(scores[0]);

// for (let i = 0; i < scores.length; i++) console.log(scores[i]);

// scores.forEach(function(score) {
//     console.log(score);
// });

// console.log(scores.length);


// scores.slice(2,3).forEach((x) => {
//     console.log(x);
// });


// scores.splice(2,1).forEach((x) => {
//     console.log(x);
// });

// console.log(scores.join(", "));


// function myFunc(theObject) {
//     theObject.make = "Toyota";
// }

// const myCar = {
//     make: "Honda", model: "Accord", year: 1998
// };

// console.log(myCar);
// myFunc(myCar);
// console.log(myCar);

// const square = function (number) {
//     return number * number;
// }

// console.log(square(2));


// const factorial = function func(n) {
//     return n < 2 ? 1 : n * func(n - 1);
// }

// console.log(factorial(3));

// function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//         result[i] = f(a[i]);
//     }
//     return result;
// }

// const cube = function (x) {
//     return x * x * x;
// }

// const numbers = [0, 1, 2, 5, 10];

// console.log(map(cube, numbers));


// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// function multiply() {
//     return num1 * num2;
// }

// console.log(multiply());


// function getScore() {
//     const num1 = 2;
//     const num2 = 3;

//     function add() {
//         return `${name} scored ${num1 + num2}`;
//     }

//     return add();
// }

// console.log(getScore());


// function foo(i) {
//     if (i < 0) {
//         return;
//     }

//     console.log(`begin: ${i}`);
//     foo(i - 1);
//     console.log(`end: ${i}`);
// }

// foo(3);


// function addSquares(a, b) {
//     function square(x) {
//         return x * x;
//     }

//     return square(a) + square(b);
// }

// console.log(addSquares(2, 3));


// function outside(x) {
//     function inside(y) {
//         return x + y;
//     }

//     return inside;
// } 


// const fnInside = outside(3);
// console.log(fnInside(5));


// const createPet = function (name) {
//     let sex;

//     const pet = {
//         setName(newName) {
//             name = newName;
//         },

//         getName() {
//             return name;
//         },

//         getSex() {
//             return sex;
//         },

//         setSex(newSex) {
//             if (
//                 typeof newSex === "string" && (
//                     newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female"
//                 )
//             )  {
//                 sex = newSex;
//             }
//         },
//     };

//     return pet;
// };

// const pet = createPet("Vivie");
// console.log(pet.getName());


// function myConcat(separator) {
//     let result = "";

//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }

//     return result;
// }

// console.log(myConcat(", ", "red", "orange", "blue"));


// function multiply(a, b) {
//     b = typeof b !== "undefined" ? b : 1;
//     return a * b;
// }

// console.log(multiply(5));


// function multiply(multiplier, ...theArgs) {
//     return theArgs.map((x) => multiplier * x);
// }

// const arr = multiply(2, 1, 2, 3);
// console.log(arr);