
export const nombre = "Alexis";
export const edad = "27";
// const apellido2 = "Matamoros"
export const apellido = "Matamoros";
// Solo puede haber una exportacion por defecto
// export default apellido2;

export const data = {
    nombre: nombre, apellido: apellido, edad: edad
}

export default function saludo(nombre, apellido, edad) {
    return (`Bienvenido ${nombre} ${apellido} edad ${edad}`)
}

