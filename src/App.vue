<template>
  <div>
    <HeaderRe/>
      <router-view></router-view>
  </div>
</template>

<script>
import HeaderRe from './components/HeaderRe.vue'


export default {
  name: 'App',
  components: {
    HeaderRe
  }
}
</script>

<style lang="scss">

@import "bootstrap";

body{
    background-color: $gray-100;
}

</style>
