<template lang="pug">
    section.denuncias-comisaria
      h3 Recepción denuncias Comisaría de Familia
      p(v-if="denunciasFiltrada.length == 0") No tenemos información disponible
      ul.alto-limitado-600
        li(v-for="i in denunciasFiltrada", v-if="denunciasFiltrada.length > 0")
          b(v-if="i[1]['Nombre reportado a 2018']") {{i[1]['Nombre reportado a 2018']}}
          .direccion(v-if="i[1].Dirección") Dirección {{i[1].Dirección}}
    
</template>
<script>
import DenunciasComisaria from '../assets/db/denunciasComisaria.json'

export default {
    name: 'DenunciasComisaria',
    computed: {
        denunciasFiltrada() {
            return Object.entries(DenunciasComisaria).filter(e => e[1].Codigo === this.$store.state.municipio[1][0].Codigo)
        }
    }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_tarjetasAside"
</style>