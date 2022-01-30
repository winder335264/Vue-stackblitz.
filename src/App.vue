<template>
  <div id="app">
    <!--<img alt="Vue logo" src="https://vuejs.org/images/logo.png">-->
    <HelloWorld :msg="mensaje"/>
    <Formulario :form="form" @guardarInfo="guardarDatos"/>

    <HelloWorld :msg="mensaje1"/>

    <button @click="ObtenerUsuarios">Obtener Usuarios</button> <br><br>
    <button @click="ObtenerUnPost">Obtener un Post</button> <br><br>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Formulario from './components/formulario.vue'
import axios from 'axios'
import API from './services/index.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Formulario
  },
   setup() {
    const mensaje = "Vue.js 3 (Formularios)";
    const mensaje1 = "Vue.js 3 (Consumo api)";
    const form = {
      nombre: { label: 'Nombre', input: 'winder Morilo'},
      email: { label: 'Email', input: 'winder335264@gmail.com'},
    }

    //Metodos
    const guardarDatos = () => { 
      console.log("Guardamos los datos -> ", form)
    }

    //Consumiendo una API
    const ObtenerUsuarios = async() => { 
      console.log(await API.ObtenerUsuarios());
        
    }
    const ObtenerUnPost =  async() => { 
      console.log( await API.ObtenerUnPost());
        
    }
    
    return {
      mensaje,mensaje1,form,guardarDatos,ObtenerUsuarios,ObtenerUnPost
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
