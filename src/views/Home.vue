<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '@/components/home/Header.vue'; // @ is an alias to /src
import HomeSwiper from '@/components/home/Swiper.vue';
import HomeIcons from '@/components/home/Icons.vue';
import HomeRecommend from '@/components/home/Recommend.vue';
import axios from 'axios';

@Component({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
    }
  },
  //获取所有组件的数据
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
      }
      console.log(res);
    },
  }
})
export default class Home extends Vue {}
</script>
