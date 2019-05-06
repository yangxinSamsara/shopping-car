 const state={
    //商品列表数据
    shopList:[
        {id:1,name:'鱼香茄子',price:12.5},
        {id:2,name:'辣子鸡丁',price:13.9},
        {id:3,name:'土豆红烧肉',price:15.8},
        {id:4,name:'五常香米',price:2.9}
    ],
    //购物车列表数据
    carList:localStorage.getItem('carList')?JSON.parse(localStorage.getItem('carList')):[],
    // 购物车信息
    carInfo:{
        total_nums:0,
        total_prices:0
    },
    //商品是否在购物车，在的话索引为当前索引，否则为-1
    currIndex:-1,
}

export default state;