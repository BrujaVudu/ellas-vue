<template lang="pug">
    
</template>
<script>
export default {
  name: 'Ubicacion',
  data () {
    return {
      busqueda : ""
    }
  },
  computed: {
    filtroCiudad() {
      // return this.$parent.alternativas_db
      //   .filter(ciudad => ciudad.Municipio.toLowerCase().includes(this.busqueda.toLowerCase()))
      //   .map(function(ciudad) {
      //     return `${ciudad.Municipio} (${ciudad.Departamento})`
      //   })
      return this.agrupadosPorCiudad
        // .filter(ciudad => ciudad[0].toLowerCase().includes(this.busqueda.toLowerCase()))
          // return `${ciudad[0].Municipio} (${ciudad[0].Departamento})    
    },
    
  }

}
</script>