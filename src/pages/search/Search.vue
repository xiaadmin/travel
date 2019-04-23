<template>
  <div class="body">
    <search-header></search-header>
    <search-list></search-list>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchList from './components/List'

export default {
  name: 'Search',
  data: function () {
    return {
    }
  },
  components: {
    SearchHeader,
    SearchList
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style lang="stylus" scoped>
  .body
    width: 100%
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #dde1e3
</style>
