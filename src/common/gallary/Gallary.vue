<template>
  <div class="container" @click="handleGallaryClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of imgs" :key="index"><img class="gallary-image" :src="item"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClose: function () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      display: table-cell
      vertical-align: middle
      text-align: center
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-image
        width: 100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>
