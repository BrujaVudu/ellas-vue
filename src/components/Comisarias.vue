<template lang="pug">
    section.comisarias
      h3 Comisarías de Familia
      p(v-if="comisariasFiltrado.length == 0") No tenemos información disponible
      ul.alto-limitado-600
        li(v-for="c in comisariasFiltrado")
          span(v-if="c[1].Dirección") Dirección: {{c[1].Dirección}}
    
</template>
<script>
import Comisarias from '@/assets/db/comisarias.json'

export default {
    name: "Comisarías",
    computed: {
        comisariasFiltrado() {
            return Object.entries(Comisarias).filter(e => e[1].Codigo === this.$store.state.municipio[1][0].Codigo)
        }
    }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_tarjetasAside"
</style>
