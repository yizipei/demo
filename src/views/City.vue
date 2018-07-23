<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script lang="ts">
import HomeHeader from '@/components/home/Header.vue'; // @ is an alias to /src
import CityHeader from '@/components/city/Header.vue';
import CitySearch from '@/components/city/Search.vue';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
  }
}
</script>

<style lang="scss" scoped>

</style>