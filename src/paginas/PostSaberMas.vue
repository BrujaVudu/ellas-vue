<template lang="pug">
  article
    .titulo.pt110
      prismic-rich-text(:field="contenido.titulo").mw600.centrado
    .contenedor
      prismic-image(:field="contenido.foto").pt40
      prismic-rich-text(:field="contenido.contenido").mw600.centrado


  
</template>
<script>
export default {
  name: 'saberMas',
  data() {
    return {
      contenido: [],
      uid: this.$route.params.uid
      
    }
  },
  methods: {
    getContent() {
      this.$prismic.client.getByUID("para_saber_mas", this.$route.params.uid)
        .then(response => {
          this.contenido = response.data
      });
    }
  },
  created() {
    this.getContent();
  }
}
</script>
<style lang="sass" scoped>
@import @/sass/globales/_colores
.titulo  
  background: linear-gradient(to right bottom, #fece39, #fed43d, #ffdb41, #ffe145, #ffe74a) 
  padding: 110px 10px 60px
  color: $morado-oscuro
  text-align: center
img 
  max-width: calc(100vw  - 20px)
</style>