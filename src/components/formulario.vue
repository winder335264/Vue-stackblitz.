<template>
  <div id="app">
    <form @submit.prevent="$emit('guardarInfo',form)">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" name="name" v-model="props.form.nombre" />
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" name="email" v-model="props.form.email" />
      </div>
    <button type="submit">Guardar</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'Formulario',
  props: {
    form: { type: Object},
  },
  setup (props,context){
    return { props }
  }

} 
</script>