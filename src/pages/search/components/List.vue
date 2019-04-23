<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom"><span class="title-left">搜索历史</span><span class="title-right">清除</span></div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">西安</div>
          </div>
          <div class="button-wrapper">
            <div class="button">乌鲁木齐</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom"><span class="title-left">热门搜索</span><span class="title-right">换一批</span></div>
        <div class="hot-list">
          <div class="hot-wrapper">
            <div class="button"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  props: {
  },
  computed: {
  },
  mounted: function () {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position:absolute
    top: .86rem
    left: 0
    right: 0
    bottom: 0
    .title
      height: .64rem
      line-height: .64rem
      background: #f0f5f6
      padding-left: .2rem
      padding-right: .2rem
      font-size: .26rem
      .title-left
        float: left
        line-height: .64rem
        color: #666
      .title-right
        float: right
        line-height: .64rem
        color: #00afc7
    .button-list
      overflow: hidden
      padding: .1rem
      background: #fff
      .button-wrapper
        box-sizing: border-box
        float: left
        .button
          margin: .1rem
          padding: .1rem .2rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
