describe("Test sobre la aplicacion de nuestro servidor", () => {
  beforeAll(() => {
    console.log("Antes de todas las pruebas");
  });
  afterAll(() => {
    console.log("Realizar al final de las pruebas");
  });

  beforeEach(() => {
    console.log("Realizar al inicio de cada prueba");
  });

  afterEach(() => {
    console.log("Realizar al final de cada prueba");
  });

  test("Dos por tres es igual a 6", () => {
    expect(2 * 3).toBe(6);
  });
  test("Dos por 5 es igual a 10", () => {
    expect(2 * 5).toBe(10);
  });
  test("Dos por dos es igual a 4", () => {
    expect(2 * 2).toBe(4);
  });
});
