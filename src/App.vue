<template>
  <div id="app">
    <h2>Vuex购物车</h2>
    <shop-list></shop-list>
    <car-list></car-list>
    <car-info></car-info>
  </div>
</template>

<script>
import ShopList from './components/ShopList'
import CarList from './components/CarList'
import CarInfo from './components/CarInfo'

export default {
  name: 'App',
  components: {
    ShopList,
    CarList,
    CarInfo
  }
}
</script>

<style>
@import "./assets/main.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 80%;
  margin: 60px auto;
}
</style>
