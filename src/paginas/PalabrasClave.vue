<template lang="pug">
    main
        h1 Palabras clave
        .palabras-clave
            p.palabra(v-for="(e, i) in data")
                b {{ e.palabra }}: 
                span {{ e.definicion }}
</template>
<script>
    export default {
        name: 'PlabrasClave',
        data() {
            return {
                data: []
            }
        },
        methods: {
            getContent () {
                this.$prismic.client.getSingle('palabras_clave')
                    .then((response) => {
                        this.data = response.data["palabra-definicion"]
                    })
            }
        },
        created () {
            this.getContent();
        }         
    }
</script>