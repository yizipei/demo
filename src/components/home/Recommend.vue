<template>
  <div class="recommend-wrap">
    <div class="title">
      <i class="iconfont icon-aixin_fuzhi"></i>
      猜你喜欢
    </div>
    <ul class="items">
      <li class="item" v-for="i of recommendList" :key="i.id">
        <div class="item-left">
          <img class="item-img" :src="i.imgUrl" >
        </div>
        <div class="item-right">
          <div class="content-top">
            <span>{{i.title}}</span>
          </div>
          <div class="content-middle">
            <div class="star">
              <public-star :score="4.5"></public-star>
            </div>
            <div class="comment">
              46584条评论
            </div>
          </div>
          <div class="content-bottom">
            <div class="price">
              <span class="price-num">4688</span>
              <span>起</span>
            </div>
            <div  class="position">
              随机
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import PublicStar from '@/components/public/Star.vue';

export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array,
  },
  components: {
    PublicStar
  }
}
</script>

<style lang="sass" scoped>
  .recommend-wrap
    background: #fff
    margin-top: .1rem
    .title
      height: .3rem
      line-height: .3rem
      font-size: .16rem
      font-weight: 600
      padding-top: .08rem
      padding-left: .1rem
      .icon-aixin_fuzhi
        color: red
    .items
      margin-top: .1rem
      padding-left: .12rem
      .item
        height: 1rem
        padding: .1rem
        .item-left
          width: 1rem
          height: 1rem
          float: left
          .item-img
            width: 100%
        .item-right
          overflow: hidden
          padding-left: .1rem
          .content-top
            margin-top: .13rem
            font-size: .16rem
          .content-middle
            height: .17rem
            margin-top: .07rem
            font-size: .14rem
            >div
              float: left
            .comment
              margin-left: .2rem
          .content-bottom
            height: .23rem
            margin-top: .11rem
            >div
              float: left
            .price
              &:before
                content: "￥"
              .price-num
                font-size: .2rem
                color: #ff8300
            .position
              float: right
              padding-top: .04rem
</style>