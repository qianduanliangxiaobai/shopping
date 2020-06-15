<template>
  <div class="cart">
      <div class="title">
          <span>商品</span>
          <span>数量</span>
      </div>
      <div v-for="good in goods" :key="good.id" class="goods">
          
         <span> {{good.id}}</span>
         <button @click="changeCount(good,1)">+</button>
         <span>{{good.count}}</span>
         <button @click="changeCount(good,-1)">-</button>
      </div>
      <div class="pay" v-show="goods[0]"><button @click="payGood">支付商品</button></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            goods:[]
        }
    },
    // computed:{
    //    goods(){
    //        return this.$store.state.cartItem
    //    }
    // }
    methods:{
        changeCount(good,count){
            this.$store.commit('changeCount',{good,count})
            console.log(good,count)
        },
        payGood(){
            alert('余额不足！好好工作！')
        }
    },
    created(){
        this.goods=this.$store.state.cartItem
    }
}
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    span{
        flex: 1;
        text-align: center;
        background-color: lightblue;
        border-left:1px solid  lightcoral ;
    }
}
.goods{
    display: flex;
    span{
        background-color: lightpink;
        flex: 1;
        text-align: center;
        border-bottom: 1px solid green;
    }
}
.pay{
    // position: absolute;
    // bottom: 100px;
    // right: 100px;
    float: right;
    padding-right: 20px;
    padding-top: 10px;
}
</style>