<template lang="pug">
  main
    h1 Para saber más
    .contenedor.grid-4-6.pt110
      aside
        Citas.card.fondo-rosa.pad
      .derecha.tarjetas-en-columna
        section(v-for="e in contenido").pad
          router-link(:to="'/saber-mas/' + e.uid").sin-under.letra-morada-oscura  
            .titulo
              prismic-image(:field="e.data.foto", width="100")
              .contenido
                prismic-rich-text(:field="e.data.titulo").texto
                span {{ e.data.fecha }}


  
</template>
<script>
import Citas from '@/components/Citas.vue' 

export default {
  name: 'saberMas',
  components: {
    Citas
  },
  data() {
    return {
      contenido: []
    }
  },
  methods: {
    getContent() {
      this.$prismic.client.query(
          this.$prismic.Predicates.at("document.type", "para_saber_mas")
      ).then(response => {
          this.contenido = response.results
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
h1 
  background: linear-gradient(to right bottom, #fece39, #fed43d, #ffdb41, #ffe145, #ffe74a) 
  padding: 110px 10px 60px
  color: $morado-oscuro
  text-align: center
section 
  border-bottom: solid 1px lightgrey  
.titulo
  display: grid
  grid-template-columns: 1fr 4fr
  align-items: center
  grid-gap: 10px
  img
    width: 80px
    height: 80px
    object-fit: cover
    border-radius: 50%
  .texto
    font-size: 0.8em
span
  color: grey    
  
</style>