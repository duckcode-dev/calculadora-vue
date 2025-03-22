<template>
  <div id="app">
    <h1>Calculadora con Vue</h1>
    <input v-model.number="numero1" type="number" placeholder="Primer número" />
    <input v-model.number="numero2" type="number" placeholder="Segundo número" />
    <div>
      <button @click="sumar">Sumar</button>
      <button @click="restar">Restar</button>
      <button @click="multiplicar">Multiplicar</button>
      <button @click="dividir">Dividir</button>
    </div>
    <p>Resultado: {{ resultado }}</p>
    <button @click="limpiar">Limpiar</button>
  </div>
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
  text-align: center;
  margin-top: 60px;
}
input, button {
  margin: 5px;
  padding: 8px;
}
button {
  cursor: pointer;
}
</style>