<template>
  <div id="app">
    <komerciaChat v-if="userData.id && storeData.id_tienda"/>
  </div>
</template>

<script>
import komerciaChat from './components/KomerciaChat.vue'

export default {
  name: 'App',
  components: {
    komerciaChat
  },
  computed: {
    userData () {
      return this.$store.state.userData
    },
    storeData () {
      return this.$store.state.tienda
    }
  }
}
</script>

<style>
:root {
  --color_principal: #00acc1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
