<template>
  <div class="my-recommend">
    <!-- 轮播图，当请求到 recommends 时才渲染 -->
    <div v-if="recommends.length" class="slide-wrapper">
      <g-silder>
        <div v-for="recommend in recommends" :key="recommend.targetId">
          <a>
            <img @load="loadImg" :src="recommend.imageUrl" class="needsclick" />
          </a>
        </div>
      </g-silder>
    </div>

    <!-- 歌单推荐列表 -->
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li @click="selectItem(item)" v-for="item in lists" class="item">
          <div class="icon">
            <img v-lazy="item.coverImgUrl" width="60" height="60" />
          </div>
          <div class="text">
            <p v-html="item.name" class="name"></p>
            <p v-html="item.description" class="desc ellipsis"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getBanner, getRecommendPlayList } from '@/api/recommend'
import GSilder from '@c/common/g-slider'

export default {
  name: 'Recommend',
  data() {
    return {
      recommends: [],
      lists: []
    }
  },
  components: {
    GSilder
  },
  created() {
    this.getBanner()
  },
  methods: {
    async getBanner() {
      const res = await getBanner()
      console.log(res)
      this.recommends = res.banners

      const res2 = await getRecommendPlayList()
      console.log(res2)
      this.lists = res2.playlists
    },
    loadImg() {
      console.log('加载图片成功')
    },
    selectItem(item) {}
  }
}
</script>

<style lang="scss" scoped>
.my-recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .slide-wrapper {
    overflow: hidden;
    position: relative;
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 20px 20px 20px;
      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .desc {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
