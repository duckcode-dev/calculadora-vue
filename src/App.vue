<template>
  <main id="app" class="container py-5">
    <section class="card mx-auto shadow-sm calculator-card">
      <div class="card-body p-4 p-md-5">
        <h1 class="h2 text-center mb-4">Calculadora con Vue</h1>

        <div class="mb-3">
          <label class="form-label" for="numero1">Primer número</label>
          <input id="numero1" v-model.number="numero1" class="form-control" type="number" step="any" @input="limpiarError" />
        </div>

        <div class="mb-4">
          <label class="form-label" for="numero2">Segundo número</label>
          <input id="numero2" v-model.number="numero2" class="form-control" type="number" step="any" @input="limpiarError" />
        </div>

        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
          <button class="btn btn-primary" type="button" @click="sumar">Sumar</button>
          <button class="btn btn-secondary" type="button" @click="restar">Restar</button>
          <button class="btn btn-success" type="button" @click="multiplicar">Multiplicar</button>
          <button class="btn btn-warning" type="button" @click="dividir">Dividir</button>
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>

        <div class="alert alert-light border text-center mb-4" role="status" aria-live="polite">
          <span class="fw-semibold">Resultado:</span> {{ resultado ?? '—' }}
        </div>

        <div class="d-grid">
          <button class="btn btn-outline-danger" type="button" @click="limpiar">Limpiar</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      numero1: '',
      numero2: '',
      resultado: null,
      error: ''
    };
  },
  methods: {
    validarNumeros() {
      if (this.numero1 === '' || this.numero2 === '') {
        this.error = 'Ingresa ambos números para realizar el cálculo.';
        this.resultado = null;
        return false;
      }

      if (!Number.isFinite(this.numero1) || !Number.isFinite(this.numero2)) {
        this.error = 'Ingresa valores numéricos válidos.';
        this.resultado = null;
        return false;
      }

      this.error = '';
      return true;
    },
    sumar() {
      if (!this.validarNumeros()) return;
      this.resultado = this.numero1 + this.numero2;
    },
    restar() {
      if (!this.validarNumeros()) return;
      this.resultado = this.numero1 - this.numero2;
    },
    multiplicar() {
      if (!this.validarNumeros()) return;
      this.resultado = this.numero1 * this.numero2;
    },
    dividir() {
      if (!this.validarNumeros()) return;

      if (this.numero2 === 0) {
        this.error = 'No se puede dividir por cero.';
        this.resultado = null;
        return;
      }

      this.resultado = this.numero1 / this.numero2;
    },
    limpiarError() {
      this.error = '';
    },
    limpiar() {
      this.numero1 = '';
      this.numero2 = '';
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
