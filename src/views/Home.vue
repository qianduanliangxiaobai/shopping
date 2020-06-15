<template>
  <div class="home">
    <div class="title">
      <router-link to="/home" class="route1"><div >首页</div></router-link>
       <router-link to="/cart" class="route2"><div >购物车</div></router-link>
    </div>
    <div  class="list">
      <v-list></v-list>
    </div>
    <div class="cavas">预留cavas空间</div>
    <div class="goods">
      <v-goods></v-goods>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import List from '@/components/list.vue'
import Goods from '@/components/goods.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld
    'v-list':List,
    'v-goods':Goods
  },
 created(){
    console.log(this.$store.getters.brands)

 }
  
}
</script>
<style lang="scss" scoped>
.title{
  display: flex;
  text-align: center;
  height: 32px;
  align-items: center;
  background-color: #f1f2f3;
  .route1{
    flex: 1;
    background-color: lightblue;
  }
  .route2{
    flex: 1;
    background-color: lightcoral;
  }
}
.list{
  margin: 0 auto;
  // width:600px;
  box-shadow: 0 2px lightblue;
padding-left: 20px;
} 
.cavas{
  height: 100px;
  box-shadow: 0 1px;
  text-align: center;
}
</style>