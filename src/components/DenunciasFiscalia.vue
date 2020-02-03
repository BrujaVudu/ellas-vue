<template lang="pug">
  section.denuncias-fiscalia
    h3 Recepción denuncias Fiscalía
    p(v-if="denunciasFiltrada.length == 0") No tenemos información disponible
    ul.alto-limitado-600
      li(v-for="i in denunciasFiltrada", v-if="denunciasFiltrada.length > 0")
        b(v-if="i[1]['Recepción denuncias Fiscalía']") {{i[1]['Recepción denuncias Fiscalía']}}
        .direccion(v-if="i[1].Dirección") {{ i[1].Dirección }}

</template>
<script>
import DenunciasFiscalia from '../assets/db/denunciasFiscalia.json'

export default {
    name: 'DenunciasFiscalia',
    computed: {
        denunciasFiltrada() {
            return Object.entries(DenunciasFiscalia).filter(e => e[1].Codigo === this.$store.state.municipio[1][0].Codigo)
        }
    }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_tarjetasAside"
</style>