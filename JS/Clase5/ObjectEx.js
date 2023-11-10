// let book = new Object();
// book.name = "El principito";
// book.author = "Anton"

let book = {
    name: "El principito",
    author: {
        name: "Antoine",
        age: 45,
    },
    categories: ["Categoria 1", "Categoria 2", "Categoria 3"],
}

console.log(book);
console.log(book.author.name)
console.log(book.categories[0])

// !!book.edit !! -> Convierte a booleano

if (book.edit !== undefined) {
    console.log(book.edit.categories[0])
} else {
    console.log("El elemento no existe")
}

console.log(book["name"])
console.log(book["author"]["name"])
console.log(typeof (book));


let author = "Antoine";
let categories = ["Categoria 1", "Categoria 2", "Categoria 3"];

let color = "bookColor"
// color = "bookPort"

let book2 = {
    bookName: "El principito",
    author,
    categories,
    [color]: "red",
    bookRead() {
        console.log(`Leyendo el libro ${this.getBookName()}`)
    },
    getBookName() {
        return this.bookName
    }
}

console.log(book2)
console.log(book2.bookRead())
console.log("Llaves del objeto")

for (let key in book2) {
    console.log(key)
    console.log(book2[key])
}

console.log("Has Property")
console.log(book2.hasOwnProperty("asd"));
console.log(book2.hasOwnProperty("bookName"));

console.log("Keys")
console.log(Object.keys(book2))

console.log("Values")
console.log(Object.values(book2))

console.log("Entries")
console.log(Object.entries(book2))

let library = []
for (let index = 0; index < 10; index++) {
    library.push(book2)
}
// [ob1,ob2,ob3,..,obn]

// console.log(library)

for (let index = 0; index < library.length; index++) {
    console.log("Objeto " + index)

    console.log(library[index].bookName);

}


for (let book of library) {

    console.log(book);
}



