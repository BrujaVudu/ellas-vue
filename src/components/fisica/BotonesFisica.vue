<template lang="pug">
  .card.pad.botonera.fondo-gris-claro
    //- h2.h2-botonera Posibles entornos de violencia
    .grid.dos-columnas
      router-link(to="/violencias/fisica/familia")
        .boton.horizontal
          img(alt="Icono violencia física en la familia", src="@/assets/iconos-fisica/fisica-familia.jpg")          
          p Violencia dentro de la familia (intrafamiliar)
      router-link(to="/violencias/fisica/cotidiana")
        .boton.horizontal
          img(alt="Icono violencia física cotidiana", src="@/assets/iconos-fisica/fisica-cotidiana.jpg")
          p Violencia por fuera de la familia
</template>
<style lang="sass" scoped>
@import "@/sass/componentes/_botonesIntraViolencias"
@media (max-width: 770px)   
  .horizontal
    flex-direction: column
</style>