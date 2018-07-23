<template>
  <div class="city">
    <city-header></city-header>
  </div>
</template>

<script lang="ts">
import HomeHeader from '@/components/home/Header.vue'; // @ is an alias to /src
import CityHeader from '@/components/city/Header.vue';
export default {
  name: 'City',
  components: {
    CityHeader,
  }
}
</script>

<style lang="scss" scoped>

</style>