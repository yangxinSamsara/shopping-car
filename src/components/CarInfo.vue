<template>
  <div class="car-info">
      <div class="item">商品总数：{{getCarInfo.total_nums}}</div>
      <div class="item">商品总价：{{getCarInfo.total_prices}}</div>
      <div class="item pull-right"><button @click="clear_local" type="button" class="btn btn-danger">清空购物车</button></div>
  </div>
</template>

<script>
export default {
  name: 'CarInfo',
  data () {
    return {
      
    }
  },
  computed: {
     getCarInfo(){
      return this.$store.getters.getCarInfo
    },
  },
  methods: {
    clear_local(){
      this.$store.dispatch('clear_local')
    }
  },
}
</script>

<style scoped>
.car-info div.item{
  display: inline-block;
  margin-right: 20px
}
</style>
