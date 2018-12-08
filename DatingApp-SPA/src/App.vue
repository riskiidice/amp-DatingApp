<template>
  <div id="app">
      <Header />
      <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Layouts/Header';

export default {
  name: 'app',
  mode: history,
  components: {
    Header
  }
}
</script>

<style>
</style>
