<template>
  <nav-bar />
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view />
</template>

<script>
import AboutPage from "./modules/pokemon/pages/AboutPage";
import NavBar from './modules/shared/components/NavBar';
import { defineAsyncComponent } from "vue";

export default {
  name: 'App',
  components: {
    AboutPage,
    NavBar: defineAsyncComponent(() => import( /* webpackChunkName:"NavBar" */ '@/modules/shared/components/NavBar.vue'))
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
