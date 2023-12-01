const request = require("supertest");
const app = require("./index");
const os = require("os");

describe("Prueba de los endpoints del servidor base", () => {
  test("Necesitamos qu eel servidor nos devuelva un mensaje con el texto 'Obtuviste los datos de todos los productos + os.arch()'", async () => {
    const response = await request(app).get("/");
    // console.log(response.body.message);
    expect(response.body.message).toEqual(
      "Obtuviste los datos de todos los productos" + os.arch()
    );
  });
  test("Se espera que al realizar la peticion obtengamos un codigo 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect("ok").toBe("ok");
    expect(true).toBe(true);
    expect(null).toBeNull();
  });

  test("Se crea u objeto", async () => {
    const response = await request(app).post("/");
    expect(response.body.message).toEqual("Creaste un nuevo producto");
  });
});
