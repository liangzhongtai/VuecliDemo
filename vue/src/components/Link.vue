<template>
    <div>
      <h1>link</h1>
      <li>引入了OpenLayers.debug.js</li>
    </div>
</template>

<script>
  import OpenLayers from '@js/OpenLayers.debug'
  export default {
    name: 'Link',
    data () {
      return {
        link: 'there is link page!'
      }
    }
  }
</script>

<style scoped>
  @import '../../src/assets/css/main.css';
</style>
