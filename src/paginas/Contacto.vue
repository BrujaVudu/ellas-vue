<template lang="pug">
    main.nosotras.grid-4-6.contenedor.pt110
        aside.tarjetas-en-columna
            Preguntas.card.pad.fondo-gris-claro
        .derecha
          prismic-rich-text(:field="data.titulo").h2in
          prismic-rich-text(:field="data.contenido").h2morado


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
        this.$prismic.client.getSingle('contacto_de_emergencia')
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
.h2in
  h1 
    line-height: 1.15em
</style>
