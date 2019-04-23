<template>
  <div id="app">
    <!-- exclude="Detail"不去保存Detail页面的数据 -->
    <!-- 由于此处设置了exclude="Detail" 所以detail下的header.vue 不能使用actived和deactived -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
