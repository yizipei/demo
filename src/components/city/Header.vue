<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style lang="sass" scoped>
  @import '~styles/varibles'
  .header
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    background: $bgColor
    color: #fff
    font-size: .16rem
    position: relative
    .header-left
      width: .4rem
      text-align: center
      color: #fff
      position: absolute
      .icon-fanhui
        font-size: .16rem
  div
</style>