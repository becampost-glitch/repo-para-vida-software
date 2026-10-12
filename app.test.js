const { sumar, restar } = require("./app");

test("Suma correcta de 2 + 3", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Resta incorrecta para simular un fallo", () => {
  expect(restar(5, 2)).toBe(10);
});
