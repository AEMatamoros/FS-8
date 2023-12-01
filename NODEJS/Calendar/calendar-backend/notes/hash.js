const bcrypt = require('bcrypt');

//EL cliente nos envia la informacio del usuariuo
//Dentro de esa informacion, estan los datos del registro de su cuenta

const password = 'micontras*ena12-3';

const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//Almenamos la credencial del usuario encriptada

console.log(hashedPassword);

const result = bcrypt.compareSync(password, hashedPassword);

console.log(result);

const result2 = bcrypt.compareSync(password + 'r', hashedPassword);

console.log(result2);
