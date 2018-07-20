<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '@/components/home/Header.vue'; // @ is an alias to /src
import HomeSwiper from '@/components/home/Swiper.vue';
import HomeIcons from '@/components/home/Icons.vue';

@Component({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  },
})
export default class Home extends Vue {}
</script>
