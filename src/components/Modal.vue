<template lang="pug">
  transition(name="fade")
    .modal(v-if="visible")
      .fondo(id="fondo")
      .contenido.card.pad.fondo-blanco
        slot
        button(type='submit', @click="$emit('update:visible', false)").btn Cerrar

</template>
<script>
export default {
  name: 'modal',
  props: ['visible'],
  model: {
    prop: 'visible'
  },
  data() {
    return {
    }
  },
  mounted() {
    document.addEventListener('click', function(event) {
      if(document.getElementById('fondo') == event.target) {
        this.$emit('update:visible', false)
      }
    })
  }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_modal"
</style>