const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

let list = document.getElementById("ingredients");

let listItems = ingredients.map((value) => {
    const li = document.createElement("li")
    li.textContent = value;
    return li
})

// console.log(listItems)

list.append(...listItems)