<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      swiperList: Array,
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
        },
      };
    },
    computed: {
      showSwiper() {
        return this.swiperList.length;
      }
    }
  };
</script>

<style lang="sass" scoped>
  .swiper-wrap /deep/ .swiper-pagination-bullet-active
    background: #fff
  .swiper-wrap
    width: 100%
    height: 0
    padding-bottom: 30.6%
    background: #c8c8c8
    overflow: hidden
    .swiper-img
      width: 100%
</style>