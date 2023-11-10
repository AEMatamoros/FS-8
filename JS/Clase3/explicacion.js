// let vegetales = [true, 'Nabo', 'Rábano', 2];

let vegetales = ['Repollo', 'Nabo', 'Rabano', 'Zanahoria', 'Berenjena'];

console.log(vegetales);
console.log(vegetales[0]);//Primera posicion
console.log(vegetales[1]);
console.log(vegetales[2]);
console.log(vegetales[3]);//Ultima posicion
console.log(vegetales.length - 1);//Ultima posicion

console.log(vegetales[4]);//Desbordamiento

vegetales[0] = 'Calabazin';

console.log(vegetales.length - 1);

console.log("Donde esta la zanahoria?")
console.log(vegetales.indexOf('Zanahoria'));

if (vegetales.indexOf('Zanahoria') !== -1) {
    console.log("La zanahoria esta aqui en el indice " + vegetales.indexOf('Zanahoria') + " " + vegetales[vegetales.indexOf('Zanahoria')]);
}

console.log(vegetales.indexOf('Coliflor'));


console.log(vegetales.includes('Zanahoria'));

console.log("ITERACION")
for (let index = 0; index < vegetales.length; index++) {
    if (vegetales[index] === "Rabano") {
        console.log('indice : ' + index + " Se encontro el Rabano ");
        break;
    }
}

console.log("ITERACION FOR OF")
for (const vegetal of vegetales) {
    if (vegetal === "Rabano") {
        console.log("Se encontro el Rabano ");
        break;
    }
}

let str = 'The quick  brown fox jumps over the lazy dog';
console.log(str)
str = str.split(" ");
console.log(str);
str = str.join("-*");
console.log(str);
str = str.split("-*").join(" ");

console.log(str);

let zoo = ['pigs', 'goats', 'sheep', 'cat', 'dog', 'bird'];
zoo.push('cow');
zoo.push('bull');
console.log(zoo);
let singleAnimal1 = zoo.pop();
let singleAnimal2 = zoo.pop();
console.log(zoo);
console.log(singleAnimal1);
console.log(singleAnimal2);

console.log(zoo.slice(1, 4));
console.log(zoo);
zoo.splice(1, 2, 'horse', 'kangaroo');
//Primer indice inicio de remplazo, 
//segundo indice numero de elementos a remplazar, 
//y luego se agregan los alemeto s nuevos
console.log(zoo);
let otherZoo = ['monkey', 'Lion', 'crocodile'];
console.log(otherZoo);
let finalZoo = zoo.concat(otherZoo);
console.log(finalZoo)

let companyCars = ["Ferrari", "Volvo", "BMW", "Toyota", "Honda"];
let myCars = companyCars;
myCars.push("Chevrolet")
console.log(companyCars);
console.log(myCars);

let num1 = 2;
let num2 = num1;
num2 = 3;
console.log(num1);
console.log(num2);