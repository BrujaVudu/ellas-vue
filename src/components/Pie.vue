<template lang="pug">
    footer
        a(href="https://docs.google.com/forms/d/1LBfksSga5UTLltcQkwEKfv_BG4LS3joOsnWR6KoCOCo/viewform?edit_requested=true", target="_blank")
            .imagen
                img(src="@/assets/cuente.png")
            button Cuéntanos tu experiencia
              include ../assets/next.svg
    
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@import "@/sass/globales/_colores"

footer 
    background: #EFEEEE
    padding: 40px
    display: flex
    justify-content: space-between
a
    text-decoration: none
    display: flex
    justify-content: center
    align-items: center
button
  background: $morado-ellas
  border: solid 4px #3D267B
  border-radius: 8px
  cursor: pointer
  font-size: 1em
  font-weight: bold
  color: white
  margin-left: -50px
  padding: 0 1em 0 70px
  height: 3.5em
  display: flex
  justify-content: center
  align-items: center
  svg 
    fill: white
    height: 1em
    margin-left: 10px
.imagen 
    background: $morado-ellas
    border-radius: 50%
    max-width: 100px
    height: 100px 
    width: 50%
    display: flex 
    align-items: center
    justify-content: center
    border: solid 4px #3D267B
    z-index: 9
    img 
        width: 60px
        height: 60px
</style>