const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mi$rcreto-1234';

const payload = {
  id: 1,
  name: 'Alexis',
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '60000' });

console.log(token);

const decode = jwt.decode(token);

console.log(decode);

try {
  //   jwt.verify(
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFsZXhpcyIsImlhdCI6MTcwMDE4NDg3MiwiZXhwIjoxNzAwMTg0OTMyfQ.ezyyuTxyoRJC5IorsVybqryS0ojP_x_V93DhI77yhp4',
  //     SECRET_KEY,
  //   );

  const result2 = jwt.verify(token, SECRET_KEY);
  console.log('Token Valido ', result2);
} catch (error) {
  console.log(error.message);
}
