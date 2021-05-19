<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import Header from './header.vue';

  @Component({
    components: {
      Header,
    },
    beforeCreate() {
      if (this.$router.currentRoute.path === '/home') {
        this.$router.replace('/home/animals');
      }
    },
  })
  export default class Layout extends Vue {}
</script>

<style>

</style>