<template>
  <div id="app">
    <!-- exclude="Detail"不去保存Detail页面的数据 -->
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
