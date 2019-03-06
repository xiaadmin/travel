<template>
  <div class="header">
  <router-link to='/'>
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
  </router-link>
  城市选择</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    background: $bgColor
    text-align: center
    color: #fff
    font-size: .32rem
    .header-left
      position: absolute
      width: .64rem
      text-align: center
      top: 0
      left: 0
      color: #fff
      .iconfont
        font-size: .4rem
</style>
