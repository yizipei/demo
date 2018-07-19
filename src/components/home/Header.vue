<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont icon-jiantouarrow486"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style lang="sass" scoped>
  //@import "~@/assets/styles/varibles"
  @import '~styles/varibles'
  .header
    display: flex
    height: .44rem
    line-height: .44rem
    background: $bgColor
    color: #fff
    .header-left
      width: .4rem
      float: left
      text-align: center
      .icon-fanhui
        font-size: .16rem
    .header-input
      flex: 1
      height: .3rem
      line-height: .3rem
      font-size: .14rem
      margin: .07rem 0
      padding-left: .1rem
      background: #fff
      border-radius: .06rem
      color: #e4e7ea
    .header-right
      width: .66rem
      float: right
      text-align: center
      .icon-jiantouarrow486
        margin-left: -.04rem
        font-size: .14rem
</style>