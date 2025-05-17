<template>
  <div class="my-tab">
    <router-link
      v-for="item in tabItems"
      tag="div"
      class="tab-item"
      :to="{ name: item.name }"
      :key="item.names"
    >
      <span class="tab-link">{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import { tabItems } from '@/data'
export default {
  name: 'GTab',
  data() {
    return {
      tabItems
    }
  }
}
</script>

<style lang="scss" scoped>
.my-tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 5px;
      color: $color-text-l;
    }
    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
