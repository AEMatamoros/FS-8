let items = document.querySelectorAll(".item");

console.log("Numero de categorias", items.length)

let itemsList = document.querySelectorAll("#categories > li");

const categoryArray = [];

itemsList.forEach(element => {
    // console.log(element.querySelector("ul"))
    console.log("Category: " + element.firstElementChild.textContent)
    console.log("Elements:" + element.lastElementChild.children.length)

})