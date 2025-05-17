<template>
  <div id="app">
    <g-header />
    <g-tab />
    <router-view />
  </div>
</template>
<script>
import GHeader from '@c/g-header/g-header'
import GTab from '@c/g-tab/g-tab.vue'
export default {
  components: {
    GHeader,
    GTab
  }
}
</script>

<style lang="scss"></style>
