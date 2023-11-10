const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

let gallery = document.getElementsByClassName("gallery")[0];
// console.log(gallery)
// let stringElements = []
// // Opcion1
// // Iterado opcion 1
// // images.forEach(element => {
// //     stringElements.push(`<img src="${element.url}" alt="${element.alt}">`)
// // });

// images.forEach(({ url, alt }) => {
//     stringElements.push(`<img src="${url}" alt="${alt}" width="300">`)
// });

// let htmlImages = stringElements.join(" ");
// console.log(htmlImages)
// gallery.innerHTML = htmlImages;

const magesList = images.map(image => {
    const img = `
    <li>
        <img src="${image.url}" alt="${image.alt}" width="300">
    </li>`
    return img;
}).join(' ');

gallery.insertAdjacentHTML('beforeend', magesList)



console.log(`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`)

