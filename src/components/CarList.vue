<template>
  <div class="car-list">
    <h4>购物车信息</h4>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in carList" :key="index">
          <td>{{car.id}}</td>
          <td>{{car.name}}</td>
          <td>{{car.price}}</td>
          <td>{{car.num}}</td>
          <td>{{calcPrices(car.num,car.price)}}</td>
          <td>
            <button type="button" @click="action_car(index,'add_db')" class="btn btn-info">+</button>
            <button type="button" @click="action_car(index,'reduce_db')" class="btn btn-warning">-</button>
            <button type="button" @click="action_car(index,'delete_db')" class="btn btn-danger">x</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as untils from '../untils'
export default {
  name: "CarList",
  data() {
    return {};
  },
  computed: {
    carList() {
      return this.$store.getters.getCarList;
    },
   
  },
  methods: {
    action_car(index,type){
      //更新当前商品的索引
      this.$store.dispatch('update_curr_shop_status',{index})
      //更新操作
      this.$store.dispatch(type)
    },
     calcPrices(a,b){
      return untils.mul(a,b)
    }
  },
};
</script>

<style scoped>
</style>
