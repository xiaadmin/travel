<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to='/city'>
      <div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: .86rem
    display: flex
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
      .iconfont
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      color: #ccc
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
</style>
