<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id">
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
  data: function () {
    return {
      recommendList: [{
      	id: '0001',
      	imgUrl: 'http://img1.qunarzz.com/sight/source/1812/4e/77bab696d56366.jpg_r_640x214_f86f2b40.jpg',
      	title: '华清宫华清宫华清宫',
      	desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}, {
  	    id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
  	    title: '华清宫华清宫华清宫',
  	    desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}, {
  	    id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg',
        title: '华清宫华清宫华清宫',
        desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/30/67d5e62ca78a29.jpg_r_640x214_9dfb4295.jpg',
        title: '华清宫华清宫华清宫',
        desc: '华清宫华清宫华清宫华华清宫华华清宫华华清宫华清华清宫华清宫'
  		}]
  	}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .weekend-title
      margin-top: .2rem
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
