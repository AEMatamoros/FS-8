const request = require('supertest');
const app = require('./index');
const fs = require('fs');
const path = require('path');

describe('Estas pruebas tienen como bjetivo verificar la valides de los endpoints', () => {
  test('api/task Debe de subir un archivo correctamente, y tambien debe generar el objeto en la BD', async () => {
    const response = await request(app)
      .post('/api/task')
      .attach('photo', path.join(__dirname, 'files', '1699580161404_logo.jpg'))
      .field('title', 'Titulo de Prueba')
      .field(
        'start',
        'Thu Nov 02 2023 20:22:57 GMT-0600 (hora estándar central)',
      )
      .field('end', 'Thu Nov 02 2023 20:22:57 GMT-0600 (hora estándar central)')
      .field('bgcolor', 'bgcolor')
      .field('notes', '#fff');
    // console.log(response);
    expect(response.status).toBe(200);
    expect(response.body.result.photo).toBeDefined();
    const filePath = path.join(__dirname, 'files', response.body.result.photo);
    expect(fs.existsSync(filePath)).toBe(true);
    fs.unlinkSync(filePath);
  });
});
