<template>
  <main id="app" class="container py-5">
    <section class="card mx-auto shadow-sm calculator-card">
      <form class="card-body p-4 p-md-5" novalidate @submit.prevent="ejecutar('sumar')">
        <h1 class="h2 text-center mb-4">Calculadora con Vue</h1>

        <div class="mb-3">
          <label class="form-label" for="numero1">Primer número</label>
          <input
            id="numero1"
            v-model.number="numero1"
            class="form-control"
            type="number"
            step="any"
            :aria-describedby="error ? 'mensaje-error' : null"
            :aria-invalid="Boolean(error)"
            @input="limpiarError"
          />
        </div>

        <div class="mb-4">
          <label class="form-label" for="numero2">Segundo número</label>
          <input
            id="numero2"
            v-model.number="numero2"
            class="form-control"
            type="number"
            step="any"
            :aria-describedby="error ? 'mensaje-error' : null"
            :aria-invalid="Boolean(error)"
            @input="limpiarError"
          />
        </div>

        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
          <button class="btn btn-primary" type="button" @click="ejecutar('sumar')">Sumar</button>
          <button class="btn btn-secondary" type="button" @click="ejecutar('restar')">Restar</button>
          <button class="btn btn-success" type="button" @click="ejecutar('multiplicar')">Multiplicar</button>
          <button class="btn btn-warning" type="button" @click="ejecutar('dividir')">Dividir</button>
        </div>

        <div v-if="error" id="mensaje-error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>

        <div class="alert alert-light border text-center mb-4" role="status" aria-live="polite">
          <span class="fw-semibold">Resultado:</span> {{ resultado ?? '—' }}
        </div>

        <div class="d-grid">
          <button class="btn btn-outline-danger" type="button" @click="limpiar">Limpiar</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { calcular } from './calculator.mjs';

export default {
  name: 'App',
  data() {
    return {
      numero1: 0,
      numero2: 0,
      resultado: null,
      error: ''
    };
  },
  methods: {
    ejecutar(operacion) {
      const calculo = calcular(operacion, this.numero1, this.numero2);
      this.resultado = calculo.resultado;
      this.error = calculo.error;
    },
    limpiarError() {
      this.error = '';
    },
    limpiar() {
      this.numero1 = 0;
      this.numero2 = 0;
      this.resultado = null;
      this.error = '';
    }
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.calculator-card {
  max-width: 34rem;
}
</style>
