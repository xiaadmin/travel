<template>
  <div>
    <router-link tag="div" to="/" v-show="!showAba" class="header-abs"><span class="iconfont">&#xe624;</span></router-link>
    <div class="header-fixed" v-show="showAba" :style="opacityStyle">
      <router-link to='/'>
        <div class="header-fixed-back"><span class="iconfont">&#xe624;</span></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAba: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    HandleScroll: function () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAba = true
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
      } else {
        this.showAba = false
      }
    }
  },
  activated: function () {
    window.addEventListener('scroll', this.HandleScroll)
  },
  deactivated: function () {
    window.removeEventListener('scroll', this.HandleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, 0.6)
    .iconfont
      color: #fff
      font-size: .4rem
  .header-fixed
    position: fixed
    z-index: 2
    height: .86rem
    line-height: .86rem
    left: 0
    top: 0
    right: 0
    background: $bgColor
    text-align: center
    color: #fff
    font-size: .32rem
    .header-fixed-back
      position: absolute
      width: .64rem
      text-align: center
      top: 0
      left: 0
      color: #fff
</style>
