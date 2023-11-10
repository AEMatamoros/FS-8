//// Ejemplo 5 - Toggle

// Escribe una clase `Toggle` que toma un objeto de configuración `{isOpen: boolean}` y 
// declara una propiedad `isOpen` - estado on/off (verdadero/falso). Por defecto el valor
// de la propiedad `isOpen` debe ser `false`.

class Toggle {

    isOpen = false;

    constructor({ isOpen }) {
        this.isOpen = isOpen;
    }

    getIsOpen() {
        return this.isOpen;
    }
    setIsOpen(newToogleValue) {
        this.isOpen = newToogleValue
    }

}

// let toogle1 = new Toggle({ isOpen: false });
// console.log(toogle1.getIsOpen())
// toogle1.setIsOpen(true)
// console.log(toogle1.getIsOpen())


//// Ejemplo 3 - User

// Escribe una clase `User` que cree un objeto con las propiedades `login` y `email`. 
// Declare las propiedades privadas `//login` y `//email`, a las que se puede acceder
// mediante el getter y setter `login` y `email`.

class User {
    #login
    #email
    constructor({ login, email }) {
        this.#email = email;
        this.#login = login;
    }

    getLogin() {
        return this.#login;
    }
    setLogin(login) {
        this.#login = login;
    }
    getEmail() {
        return this.#email;
    }
    setEmail(email) {
        this.#email = email;
    }
}

const mango = new User({
    login: 'Mango',
    email: 'mango@dog.woof',
});

console.log(mango.getEmail())