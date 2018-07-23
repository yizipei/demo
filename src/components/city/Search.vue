<template>
  <div class="search">
    <input class="search-ipt" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
  export default {
    name: "CitySearch"
  }
</script>

<style lang="sass" scoped>
  @import '~styles/varibles.sass'
  .search
    //height: $headerHeight
    background: $bgColor
    padding: .1rem
    .search-ipt
      box-sizing: border-box
      width: 90%
      display: block
      padding: 0 .1rem
      margin: 0 auto
      height: .3rem
      text-align: center
      border-radius: .05rem
      color: #666

  div
</style>