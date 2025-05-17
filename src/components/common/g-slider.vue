<!-- better-scroll 滚动组件 -->

<template>
  <div ref="slider" class="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        class="dot-item"
        :class="{ active: index === dotIndex }"
        v-for="(item, index) in dots"
        :key="index"
      ></span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { addClass } from '@u/dom'
export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this._setSliderWidth()
        this._initSlider()

        this._bindDotClick()
        if (this.autoPlay) {
          this._play()
        }
      }, 20)
    })

    window.addEventListener('resize', () => {
      if (!this.slider) return
      this._setSliderWidth(true)
      // 重新计算better-scroll的尺寸，让其重新渲染
      this.slider.refresh()
    })
  },
  data() {
    return {
      dots: [],
      dotIndex: 0,
      sliderWidth: 0,
      children: []
    }
  },
  computed: {},

  methods: {
    _setSliderWidth(flag) {
      // 1.获取所有子元素

      this.children = this.$refs.sliderGroup.children
      console.log('🚀 ~ _setSliderWidth ~ this.children:', this.children)
      let width = 0
      // 2.设置每个子元素的宽度为屏幕的宽度

      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      //如果要循环播放，则将第一个元素复制到最后一个位置，同理也将最后一个元素复制到第一个位置
      if (this.loop && !flag) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
      this._initDots()
    },
    _play() {
      this.timer = setInterval(() => {
        this.slider.next()
      }, this.interval)
    },
    _bindDotClick() {},
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
        // click: trues
      })
      console.log('🚀 ~ _initSlider ~ this.slider:', this.slider)
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.dotIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _initDots() {
      for (let index = 0; index < this.children.length; index++) {
        this.dots.push({})
      }
      console.log('🚀 ~ _initDots ~  this.dots:', this.dots)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  min-height: 1px;
  position: relative;
  .dots {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translate3D(-50%, 0, 0);
    .dot-item {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.4;
      &.active {
        background: #fff;
        opacity: 1;
      }
    }
  }
}
.slider-group {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.slider-item {
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
}
.slider-item a {
  display: block;
}
.slider-item img {
  display: block;
  width: 100%;
}
</style>
