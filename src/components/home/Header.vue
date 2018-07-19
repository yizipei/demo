<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="sass" scoped>
  .header
    display: flex
    height: .44rem
    line-height: .44rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .4rem
      float: left
      text-align: center
    .header-input
      flex: 1
      height: .3rem
      line-height: .3rem
      font-size: .14rem
      margin: .07rem 0
      background: #fff
      border-radius: .06rem
      color: #e4e7ea
    .header-right
      width: .66rem
      float: right
      text-align: center
</style>