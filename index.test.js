const mensajeSaludo = require('./index');

test('Prueba del mensaje de saludo', () => {
  expect(mensajeSaludo()).toBe('Hello Elian Báez from Practica Final DevOps');
});
