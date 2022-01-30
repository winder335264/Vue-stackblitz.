<template>
  <div id="app">
    <!--<img alt="Vue logo" src="https://vuejs.org/images/logo.png">-->
    <HelloWorld :msg="mensaje"/>
    <Formulario :form="form" @guardarInfo="guardarDatos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Formulario from './components/formulario.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Formulario
  },
   setup() {
    const mensaje = "Hola Winder Bienvenido a Vue.js 3 (Formularios)";
    const form = {
      nombre: 'Winder Morillo',
      email:'winder335264@gmail.com'
    }
    return {
      mensaje,form
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
