<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
        },
        swiperList: [
          {
            id: '001',
            url: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg',
          },
          {
            id: '002',
            url: 'http://img1.qunarzz.com/piao/fusion/1706/5d/a47eff229e73f302.jpg_750x200_bcc494d4.jpg',
          },
        ],
      };
    },
  };
</script>

<style lang="sass" scoped>
  .swiper-wrap /deep/ .swiper-pagination-bullet-active
    background: #fff
  .swiper-wrap
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #c8c8c8
    overflow: hidden
    .swiper-img
      width: 100%
</style>