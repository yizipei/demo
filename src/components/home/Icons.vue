<template>
  <div class="icons-wrap">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img-wrap" >
            <img class="icon-img" :src="item.imgUrl">
          </div>
          <span class="icon-desc">热门景点</span>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      iconList: Array,
    },
    data() {
      return {
        swiperOption: {
          // loop: true,
          autoplay:false
        },
      };
    },
    computed: {
      pages() {
        const pages =[];
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~styles/mixins'
  .icons-wrap
    width: 100%
    height: 0
    padding-bottom: 50%
    background: #fff
    .icon
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      .icon-img-wrap
        width: 100%
        margin-top: .05rem
        .icon-img
          display: block
          width: 66%
          margin: 0 auto
      .icon-desc
        display: block
        width: 100%
        margin-top: .1rem
        text-align: center
        font-weight: 500
        font-size: .14rem
        @include ellipsis()
</style>