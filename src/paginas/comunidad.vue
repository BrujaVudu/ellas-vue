<template lang="pug">
    main.nosotras.grid-4-6.contenedor.pt110
        aside.tarjetas-en-columna
            Preguntas.card.pad.fondo-gris-claro
            Citas.card.pad.fondo-rosa
        .derecha
          //- prismic-rich-text(:field="data.titulo").h2in
          prismic-rich-text(:field="data.contenido").comunidad
          a(href="https://goo.gl/forms/l3tp3SJY0CSZ9vTy2", alt="Llenar formulario de la Comunidad Ellas", target="_blank").btn.sin-under Llenar formulario


</template>
<script>
import Citas from '@/components/Citas.vue' 
import SaberMas from '@/components/SaberMas.vue' 
import Preguntas from '@/components/PreguntasFrecuentes.vue'

export default {
    name: 'nosotras',
    components: {
        Citas,
        SaberMas,
        Preguntas
    }, 
    data() {
        return {
            data: []
        }
    },
    methods: {
        getContent () {
        this.$prismic.client.getSingle('comunidad')
            .then((response) => {
                 this.data = response.data
        })
        }
    },
    created() {
        this.getContent();
    }
    
}
</script>
<style lang="sass">
.comunidad
  img 
    width: 100%
    max-width: 450px
    margin: 0 auto
.sin-under
  text-decoration: none
  display: inline-block
  margin-top: 30px
</style>
