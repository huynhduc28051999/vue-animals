<template>
    <nav>
      <ul class="menu">
        <div class='container'>
          <li>
            <router-link to="/home/animals">Home</router-link>
          </li>
          <li class="rightli" style="float: right">
            <a @click="onLogout" >logout</a>
          </li>
        </div>
      </ul>
    </nav>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    methods: {
      onLogout() {
        this.$store.dispatch('logout').then(() => this.$router.replace('/login'));
      },
    },
  })
  export default class Header extends Vue {}
</script>

<style scoped>
 
  ul.menu {
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  ul.menu li {
    float: left;
  }
  ul.menu li a {
    display: block;
    color: #666;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    cursor: pointer;
  }

  ul.menu li a:active {
    color: white;
    background-color: #008CBA;
  }
  ul.menu li a.active {
    color: white;
    background-color: #008CBA;
  }
</style>