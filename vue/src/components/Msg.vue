<template>
    <div>
      <h1>msg</h1>
      <li>引入了EMap.js</li>
    </div>
</template>

<script>
import EMap from '@js/canvg'
export default {
  name: 'Msg',
  data () {
    return {
      msg: 'there is msg page!'
    }
  }
}
</script>

<style scoped>
  @import '../../src/assets/css/main.css';
</style>
