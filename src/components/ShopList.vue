<template>
  <div class="shop-list">
    <h4>商品信息</h4>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shop in shopList">
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>{{shop.num || ''}}</td>
          <td>
            <button
              type="button"
              class="btn btn-info"
              @click="add_db(shop)"
            >{{shop.num?'+':'添加到购物车'}}</button>
            <button
              type="button"
              class="btn btn-warning"
              @click="reduce_db(shop)"
              v-if="shop.num&&shop.num>0"
            >-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  data() {
    return {
      shopList: []
    };
  },
  created() {
    this.shopList = this.$store.state.car.shopList;
  },
  mounted() {
    let carList = this.$store.state.car.carList;
    for (let i = 0; i < this.shopList.length; i++) {
      for (let j = 0; j < carList.length; j++) {
        if (carList[j].id == this.shopList[i].id) {
          this.$set(this.shopList, i, carList[j]);
          break;
        }
      }
    }
  },
  methods: {
    add_db(shop) {
      let id = shop.id;
      //先判断购物车是否存在该商品，存在直接加num，否则push进去一条数据
      this.$store.dispatch("check_db", { id });

      if (this.$store.state.car.currIndex != -1) {
        //存在，直接num++
        this.$store.dispatch("add_db");
      } else {
        //不存在，插入一条数据
        this.$set(shop, "num", 1);
        this.$store.dispatch("create_db", { shop });
      }
    },
    reduce_db(shop){
      let id=shop.id;
      this.$store.dispatch('check_db',{id});
      this.$store.dispatch('reduce_db')
    }
  }
};
</script>

<style scoped>
</style>
