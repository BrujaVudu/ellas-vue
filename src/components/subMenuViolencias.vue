<template lang="pug">
  .pad
    ul
      li(@click="aViolencias('fisica')").pointer 
        img(src="@/assets/iconos-violencias/confondo/fisica.svg", width="100")
        p Violencia física o psicológica
      li(@click="aViolencias('sexual')").pointer 
        img(src="@/assets/iconos-violencias/confondo/sexual.svg", width="100")
        p Violencia sexual
      li(@click="aViolencias('economica')").pointer 
        img(src="@/assets/iconos-violencias/confondo/economica.svg", width="100")
        p Violencia económica
      li(@click="aViolencias('politica')").pointer 
        img(src="@/assets/iconos-violencias/confondo/politica.svg", width="100")
        p Violencia política
      li(@click="aViolencias('acoso')").pointer 
        img(src="@/assets/iconos-violencias/confondo/acoso.svg", width="100")
        p Acoso
  
</template>
<script>
export default {
    nam: 'subMenuViolencias',
    methods: {
    aViolencias(n) {
      if(this.$store.state.municipio.length) {
        this.$router.push({ path: '/violencias/' + n  })
      } else {
        alert("Debes seleccionar tu ubicación para obtener información sobre las rutas de orientación en tu ciudad o municipio")
      }
      
    }
    
  }
}
</script>

<style lang="sass" scoped>
@import "@/sass/componentes/_subMenuViolencias.sass"
</style>