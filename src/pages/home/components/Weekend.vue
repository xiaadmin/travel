<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li v-for="item of weekendList" :key="item.id">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" class="item-image">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .weekend-title
      line-height: .8rem
      background: #eee
      text-indent: .2rem
    .item-img-wrapper
      height: 0
      padding-bottom: 37%
      overflow: hidden
      .item-image
        width: 100%
    .item-info
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>
