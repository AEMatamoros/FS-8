// JSON
const ages = {
    alice: { value: 18, enumerable: true },
    bob: { value: 27, enumerable: true },
};

// console.log(ages)

const agesString = JSON.stringify({
    alice: { value: 18, enumerable: true },
    bob: { value: 27, enumerable: true },
});

// console.log(agesString)

// console.log(JSON.parse(`{"msg":"title"}`))



// console.log("Intentando convertir el objeto")
try {
    // console.log(JSON.parse(`{msg":"title"}`))
    // console.log("Se convirtio el objeto")
} catch (error) {
    // console.error("No se pudo convertir el error")
}
// console.log("Despues del error")

// Almacenamiento WEB
const userAges = [
    { name: "Alice", age: 18 },
    {
        name: "Juan", age: 18,
        getEdad() {
            return "Edad"
        }
    },

]

localStorage.setItem("EdadAlumnos", JSON.stringify(userAges))
localStorage.setItem("EdadAlumnos2", JSON.stringify(userAges))
localStorage.setItem("EdadAlumnos3", JSON.stringify(userAges))
localStorage.setItem("EdadAlumnos4", JSON.stringify(userAges))
localStorage.setItem("EdadAlumnos5", "Esto es una cadena")
localStorage.setItem("EdadAlumnos6", true)
localStorage.setItem("EdadAlumnos7", 5)





// sessionStorage.setItem("EdadAlumnos", JSON.stringify(userAges))
// sessionStorage.setItem("EdadAlumnos2", JSON.stringify(userAges))
// sessionStorage.setItem("EdadAlumnos3", JSON.stringify(userAges))
// sessionStorage.setItem("EdadAlumnos4", JSON.stringify(userAges))

// console.log(JSON.parse(localStorage.getItem("EdadAlumnos")))
let newUserAges;
if (localStorage.getItem("EdadAlunos") != null) {
    newUserAges = JSON.parse(localStorage.getItem("EdadAlumnos"))
} else {
    newUserAges = []
    // console.log("No es posible obtenerlo")
}
// newUserAges = JSON.parse(`{"alice": { "value":18 }}`)
console.log(newUserAges)
localStorage.removeItem("EdadAlumnos2")
console.log(localStorage.length)

// localStorage.clear()
console.log(localStorage.length)