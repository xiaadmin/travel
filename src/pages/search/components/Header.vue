<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-center">
      <div class="header-input">输入城市或景点</div>
    </div>
      <!-- <div class="header-right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div> -->
      <div class="header-right">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: .86rem
    display: flex
    background: #fff
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
      margin-right: .2rem
      .iconfont
        font-size: .4rem
        text-align: center
        color: #616161
    .header-center
      flex: 1
      background: #dde1e3
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      border-radius: .4rem
      .header-input
        height: .64rem
        line-height: .64rem
        padding-left: .2rem
        text-align: center
        border-radius: .4rem
        color: #999
        font-size: .28rem
        font-family: "Microsoft Yahei",Arial
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #212121
      font-size: .28rem
</style>
