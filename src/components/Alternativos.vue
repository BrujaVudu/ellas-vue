<template lang="pug">
    section.metedos-alternativos
        .lista-denuncias(v-for="m in alternativosFiltrada[0][1]")
            h3 {{ m.Caracter }}
            p(v-if="m.Barrio") Barrio: {{m.Barrio}} 
            p(v-if="m.Dirección") Dirección: {{m.Dirección}}
            p(v-if="m.Teléfono") Teléfono: {{m.Teléfono}}
            p(v-if="m.Horario") Horario: {{m.Horario}}


    
</template>
<script>
import Alternativos from '@/assets/db/alternativos.json'

export default {
    name: "Alternativos",
    computed: {
        alternativosFiltrada() {
            return Object.entries(Alternativos).filter(c => c[0].toLowerCase().normalize('NFD').includes(this.$store.state.municipio[0].toLowerCase().normalize('NFD')))
        }    
    }
}
</script>