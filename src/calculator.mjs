export function calcular(operacion, numero1, numero2) {
  if (numero1 === '' || numero2 === '') {
    return { resultado: null, error: 'Ingresa ambos números para realizar el cálculo.' };
  }

  if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
    return { resultado: null, error: 'Ingresa valores numéricos válidos.' };
  }

  if (operacion === 'dividir' && numero2 === 0) {
    return { resultado: null, error: 'No se puede dividir por cero.' };
  }

  const operaciones = {
    sumar: numero1 + numero2,
    restar: numero1 - numero2,
    multiplicar: numero1 * numero2,
    dividir: numero1 / numero2
  };

  return { resultado: operaciones[operacion], error: '' };
}
