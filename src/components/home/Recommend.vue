<template>
  <div class="recommend-wrap">
    <div class="title">
      <i class="iconfont icon-aixin_fuzhi"></i>
      猜你喜欢
    </div>
    <ul class="items">
      <li class="item" v-for="i of commandList" :key="i.id">
        <div class="item-left">
          <img class="item-img" :src="i.url" >
        </div>
        <div class="item-right">
          <div class="content-top">
            <span>{{i.title}}</span>
          </div>
          <div class="content-middle">
            <div class="star">
              <public-star :score="i.level"></public-star>
            </div>
            <div class="comment">
              {{i.comment}}条评论
            </div>
          </div>
          <div class="content-bottom">
            <div class="price">
              <span class="price-num">{{i.price}}</span>
              <span>起</span>
            </div>
            <div  class="position">
              {{i.position}}
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
  data() {
    return {
      commandList: [
        {
          id: Math.random(),
          url: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          level: 5,
          comment: 15646,
          price: 45.5,
          position: '杭州',
        },{
          id: Math.random(),
          url: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          level: 4.5,
          comment: 15646,
          price: 45.5,
          position: '杭州',
        },{
          id: Math.random(),
          url: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          level: 3.5,
          comment: 15646,
          price: 45.5,
          position: '杭州',
        },{
          id: Math.random(),
          url: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          level: 4.5,
          comment: 15646,
          price: 45.5,
          position: '杭州',
        },
      ],
    };
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
      width: 100%
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
        width: 100%
        height: 1rem
        padding: .1rem
        >div
          float: left
        .item-left
          width: 1rem
          height: 1rem
          .item-img
            width: 100%
        .item-right
          width: 2.32rem
          padding-left: .1rem
          >div
            width: 100%
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
          div
</style>