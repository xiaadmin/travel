<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id" class="item border-bottom">
          <img :src="item.imgUrl" class="item-image">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
      	id: '0001',
      	imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
      	title: '华清宫华清宫华清宫',
      	desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}, {
  	    id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
  	    title: '华清宫华清宫华清宫',
  	    desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}, {
  	    id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
        title: '华清宫华清宫华清宫',
        desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
        title: '华清宫华清宫华清宫',
        desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}]
  	}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-image
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
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
      .item-button
        background: #ff9300
        margin-top: .1rem
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
