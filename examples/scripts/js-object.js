// const person = {};

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };


// person.name;
// person.name[0];
// person.age;
// person.bio();
// person.introduceSelf();

// const person2 = {
//     name: {
//         first: "Bob",
//         last: "Smith",
//     },
// };

// const person3 = {
//     name: ["Bob", "Smith"],
//     age: 32,
// };

// function logProperty(propertyName) {
//     console.log(person3[propertyName]);
// }

// person["eyes"] = "hazel";

// person.farewell = function () {
//     console.log("Bye everybody!");
// };

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;


// introduceSelf() {
//     console.log(`Hi! I'm ${this.name[0]}`);
// }

// const person4 = {
//     name: "Chris",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };

// const person5 = {
//     name: "Deepti",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function () {
//         console.log(`Hi! I'm ${this.name}`);
//     }
//     return obj;
// }

// const salva = createPerson("Salva");
// const frankie = createPerson("Frankie");


// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function() {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// }

// const salva = new Person("Salva");
// const frankie = new Person("Frankie");

let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
        street: "123 Camino Real",
        city: "Santa Rosa",
        country: "hondarus"
    },
    isEmployed: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};
