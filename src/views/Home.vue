<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '@/components/home/Header.vue'; // @ is an alias to /src

@Component({
  components: {
    HomeHeader,
  },
})
export default class Home extends Vue {}
</script>
