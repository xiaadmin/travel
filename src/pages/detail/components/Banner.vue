<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont">&#xe626;</span>{{this.gallaryImgs.length}}</div>
        </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleBannerClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary
  },
  data: function () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = !this.showGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        padding: 0 .3rem
        margin-top: .14rem
        margin-right: .14rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .6)
        font-size: .24rem
        .iconfont
          line-height: .32rem
          font-size: .24rem
          padding: 0 .04rem
</style>
