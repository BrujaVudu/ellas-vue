<template lang="pug">
    main(v-if="data.length").nosotras.grid-4-6.contenedor.pt110
        aside.tarjetas-en-columna
            Citas.card.pad.fondo-rosa
            SaberMas.card.pad
        .derecha
            section(v-for="i in data")
                prismic-rich-text(:field="i.nombre").h2morado
                prismic-rich-text(:field="i.descripcion").h2morado


</template>
<script>
import Citas from '@/components/Citas.vue' 
import SaberMas from '@/components/SaberMas.vue' 

export default {
    name: 'nosotras',
    components: {
        Citas,
        SaberMas
    }, 
    data() {
        return {
            data: []
        }
    },
    methods: {
        getContent () {
        this.$prismic.client.getSingle('nosotras')
            .then((response) => {
                 this.data = response.data.presentaciones
        })
        }
    },
    created() {
        this.getContent();
    }
    
}
</script>
