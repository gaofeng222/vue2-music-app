<template>
  <div id="app">
    <g-header />
    <router-view />
  </div>
</template>
<script>
import GHeader from '@c/g-header/g-header'

export default {
  components: {
    GHeader
  }
}
</script>

<style lang="scss"></style>
