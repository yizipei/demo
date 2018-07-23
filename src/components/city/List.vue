<template>
  <div class="list">
    <div class="area">
      <div class="title">当前城市</div>
      <div class="button-list"></div>
    </div>
    <div class="area">
      <div class="title">热门城市</div>
    </div>
    <div class="area">
      <div class="title">A</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CityList"
  }
</script>

<style lang="sass" scoped>
  @import '~styles/varibles.sass'
  .list
    .area
      .button-list
        padding: .1rem
    .title
      margin: .12rem .15rem
  div
</style>