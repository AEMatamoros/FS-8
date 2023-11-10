// const planets = ["Tierra", "Marte", "Venus", "Jupiter"];

// let newPlanets;

// // console.log(planets.map((value) => {
// //     return "Este es el nuevo planeta " + value
// // }))
// newPlanets = planets.map((value) => {
//     return "Este es el nuevo planeta " + value
// });

// console.log(newPlanets)

// const planets = [2, 3, 4, 5];

// let newPlanets;


// newPlanets = planets.map((value) => {
//     return value - 2
// });

// newPlanets = planets.map((value) => {
//     return value * 2
// });
// console.log(newPlanets)

const students = [
    { name: "Mango", courses: ["matemáticas", "física"] },
    { name: "Poly", courses: ["informática", "matemáticas"] },
    { name: "Kiwi", courses: ["física", "biología"] },
];

// console.log(students.map(student => student.courses));
// console.log(students.flatMap(student => student.courses));

let customData = [
    {
        "userId": 1,
        "id": 1,
        "title": "Lorem ipsum dolor sit. Update",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem.",
        "age": 0
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Lorem ipsum dolor sit.",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem.",
        "age": 1
    },
    {
        "userId": 1,
        "id": 3,
        "title": "Lorem ipsum dolor sit.",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem.",
        "age": 2
    },
    {
        "userId": 1,
        "id": 4,
        "title": "Lorem ipsum dolor sit.",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem.",
        "age": 3
    },
    {
        "userId": 1,
        "id": 5,
        "title": "Lorem ipsum dolor sit. Update",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem.",
        "age": 4
    }
]

// console.log(customData.filter(value => value.title == "Lorem ipsum dolor sit. Update"))
// console.log(customData.filter(value => value.id == 10))

// console.log(customData.find(value => value.title == "Lorem ipsum dolor sit. Update"))

// console.log(customData.findIndex(value => value.title == "Lorem ipsum dolor sit. Update"))
// console.log(customData.findIndex(value => value.title == "Lorem ipsum dolor sit. Updateqwqwe"))
// console.log("Every")
// console.log(customData.every(value => value.age === 1))

console.log("Some")
console.log(customData.some(value => value.age === 1))

let numeros = [1, 2, 3, 4, 5];
numeros.reduce((previus, actual) => {
    console.log("previus")
    console.log(previus)
    console.log("actual")
    console.log(actual)
    console.log("previus + actual")
    console.log(previus + actual)
    return previus + actual
})



const scores = [61, 19, 74, 35, 92, 56];
// scores.sort(); //ASC
// console.log(scores)
// scores.sort((a, b) => b - a); //DESC

// console.log(scores);


// let pows = scores.map(value => value * value)
// let findedValue = pows.find(value => value === 5476)
// console.log(findedValue)

let pows = scores.map(value => value * value).find(value => value === 5476);
console.log(pows)


let filteredData = customData.filter(value => value.title === "Lorem ipsum dolor sit. Update").map(function (value) {
    value.id = value.id + 10
    return value
}).find(value => value.age === 4)
console.log(filteredData)