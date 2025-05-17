<template>
  <div class="my-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>

    <!-- 个人中心 -->
    <router-link to="/user" class="mine" tag="div">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.my-header {
  position: relative;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: $color-theme;
  display: flex;
  // font-size: 0;
  justify-content: center;
  align-items: center;
  .icon {
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('logo');
    & {
      background-size: 30px 32px;
    }
  }
  .text {
    line-height: 44px;
    font-size: $font-size-large;
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .icon-mine {
      display: block;
      padding: 12px;
      font-size: 20px;
      color: $color-theme;
    }
  }
}
</style>
