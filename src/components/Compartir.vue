<template lang="pug">
  button(
    type="button",
    :onClick="url"
    ) Compartir 
</template>
<script>
export default {
  name: 'compartir',
  props: ['indice'],
  model: {
    prop: 'indice'
  },
  computed: {
    url() {
      return "window.open('/citas/" + this.indice + "', '', 'width=900,height=880')"
    }
  }
}
</script>