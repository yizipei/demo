<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
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
  //获取所有组件的数据
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get('/public/mock/index.json')
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
    },
  }
})
export default class Home extends Vue {}
</script>
