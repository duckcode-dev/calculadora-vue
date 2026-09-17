import assert from 'node:assert/strict';
import test from 'node:test';
import { calcular } from '../src/calculator.mjs';

test('realiza las cuatro operaciones básicas', () => {
  assert.deepEqual(calcular('sumar', 8, 2), { resultado: 10, error: '' });
  assert.deepEqual(calcular('restar', 8, 2), { resultado: 6, error: '' });
  assert.deepEqual(calcular('multiplicar', 8, 2), { resultado: 16, error: '' });
  assert.deepEqual(calcular('dividir', 8, 2), { resultado: 4, error: '' });
});

test('admite números decimales y negativos', () => {
  assert.deepEqual(calcular('sumar', -1.5, 2.25), { resultado: 0.75, error: '' });
});

test('rechaza campos vacíos y valores no numéricos', () => {
  assert.equal(calcular('sumar', '', 2).error, 'Ingresa ambos números para realizar el cálculo.');
  assert.equal(calcular('sumar', Number.NaN, 2).error, 'Ingresa valores numéricos válidos.');
});

test('impide dividir por cero', () => {
  assert.deepEqual(calcular('dividir', 8, 0), {
    resultado: null,
    error: 'No se puede dividir por cero.'
  });
});
