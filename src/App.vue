<template>
  <main id="app" class="container py-5">
    <section class="card mx-auto shadow-sm calculator-card">
      <div class="card-body p-4 p-md-5">
        <h1 class="h2 text-center mb-4">Calculadora con Vue</h1>

        <div class="mb-3">
          <label class="form-label" for="numero1">Primer número</label>
          <input id="numero1" v-model.number="numero1" class="form-control" type="number" />
        </div>

        <div class="mb-4">
          <label class="form-label" for="numero2">Segundo número</label>
          <input id="numero2" v-model.number="numero2" class="form-control" type="number" />
        </div>

        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
          <button class="btn btn-primary" type="button" @click="sumar">Sumar</button>
          <button class="btn btn-secondary" type="button" @click="restar">Restar</button>
          <button class="btn btn-success" type="button" @click="multiplicar">Multiplicar</button>
          <button class="btn btn-warning" type="button" @click="dividir">Dividir</button>
        </div>

        <div class="alert alert-light border text-center mb-4" role="status">
          <span class="fw-semibold">Resultado:</span> {{ resultado }}
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
      numero1: 0,
      numero2: 0,
      resultado: 0
    };
  },
  methods: {
    sumar() {
      this.resultado = this.numero1 + this.numero2;
    },
    restar() {
      this.resultado = this.numero1 - this.numero2;
    },
    multiplicar() {
      this.resultado = this.numero1 * this.numero2;
    },
    dividir() {
      if (this.numero2 === 0) {
        this.resultado = "No se puede dividir por 0";
      } else {
        this.resultado = this.numero1 / this.numero2;
      }
    },
    limpiar() {
      this.numero2 = 0;
      this.numero1 = 0;
      this.resultado = 0;
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
