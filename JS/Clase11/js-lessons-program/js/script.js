const list = document.getElementById("list");

if (list) {
    console.log(list.children.length);
} else {
    console.log("this element doesn't exist");
}

//! ====================================

//* 1. Create a list of technologies studied in the Fullstack course using js
// Show how it is done with the help of **map** and **reduce**

const container = document.getElementById("container");
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

/*
    1. Create a container for ul tag
    2. Create a cycle for sorting array elements
    3. Create a li tag
    4. Write the text from the array into the li tag
    5. Place li inside of ul
    6. Place ul tag with items on the page
*/
let ulContainer = document.createElement("ul");
// Con for
let arrayE = []
technologies.sort()
for (let tec of technologies) {
    let li = document.createElement("li");
    li.innerText = tec
    arrayE.push(li)
}
ulContainer.append(...arrayE)
console.log(ulContainer)
// console.log(ulContainer);
container.insertAdjacentElement("beforebegin", ulContainer);

//Con MAP
// let technologiesLI = technologies.map(value => `<li>${value}</li>`).join("")
// document.body.innerHTML += `<ul>${technologiesLI}</ul>`;

//Con reduce

// let technologiesLI = technologies.reduce((prev, currentValue, index) => {
//     if (index == 1) {
//         prev = `<li>${prev}</li>`
//     }
//     // console.log(prev)
//     // console.log(currentValue)
//     // console.log(`${prev} <li>${currentValue}</li>`)
//     return `${prev} <li>${currentValue}</li>`
// })
// // console.log(technologiesLI)
// document.body.innerHTML += `<ul>${technologiesLI}</ul>`;
//! ====================================

//* 2. Create several buttons based on an array of objects using createElement

const colors = [
    {
        label: "red",
        color: "#FF0000",
    },
    {
        label: "green",
        color: "#00FF00",
    },
    {
        label: "blue",
        color: "#0000FF",
    },
    {
        label: "yellow",
        color: "#FFFF00",
    },
];

/*
    1. Iterate through the array of colors using a loop
    2. Create a button
    3. Set the background color of the button
    4. Set the text of the button
    5. Add a button to the document

*/

for (let buttonOptions of colors) {
    let button = document.createElement("button")
    button.innerText = buttonOptions.label;
    button.style.backgroundColor = buttonOptions.color;
    document.body.prepend(button)
}
