<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '@/components/home/Header.vue'; // @ is an alias to /src
import HomeSwiper from '@/components/home/Swiper.vue';

@Component({
  components: {
    HomeHeader,
    HomeSwiper,
  },
})
export default class Home extends Vue {}
</script>
