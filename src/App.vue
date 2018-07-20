<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--当前路由地址显示的内容 区router.ts里面找-->
    <router-view/>
  </div>
</template>

<style lang="sass">
  #app
    background: #f5f5f5
    overflow-x: hidden
</style>
