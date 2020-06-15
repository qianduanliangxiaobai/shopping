import Vue from 'vue'
import Vuex from 'vuex'
import product_data from './product.js'


Vue.use(Vuex)

//数组去重
function getFilterArray (array) {
  const res = [];
  const json = {};
  for (let i = 0; i < array.length; i++){
      const _self = array[i];
      if(!json[_self]){
          res.push(_self);
          json[_self] = 1;
      }
  }
  return res;
}

export default new Vuex.Store({
  state: {
    product_data,
    cartItem:[]
    
  },
  getters:{
    goods:state=>{
      return state.product_data
    },
    brands:state=>{
     const brands= state.product_data.map(item=>item.brand);
     return getFilterArray(brands)
    },
    colors:state=>{
      const colors= state.product_data.map(item=>item.color);
      return getFilterArray(colors)
     }
  },
  mutations: {
    //添加到购物车
   
    addTocart(item,id){
      const isAdded=this.state.cartItem.find(item=>item.id==id);
      if(isAdded){
        //先判断是否已经添加到购物车，是的话，数量+1
        ++isAdded.count
      }else{
        this.state.cartItem.push({
          id:id,
          count:1
        })
      }
    },
    //改变购物车的商品数量
    changeCount(state,params){
      // console.log(this.state.cartItem)
      // console.log(changecount)
      // console.log(good)
      // console.log(b.count)
      const num=this.state.cartItem.indexOf(params.good);
      console.log(state.cartItem[num].count)
      this.state.cartItem[num].count+=params.count;
      if(state.cartItem[num].count==0){
        state.cartItem.splice(num,1)
      }
      // console.log(num);
      
      // console.log(this.state.cartItem[num])
    },
    // 改变goods。vue展示的数据  品牌
    changeData(state,label){
      //  
      // console.log(e)
      console.log(label)
      // console.log(this.getters.goods)
    state.product_data=state.product_data.filter(item=>item.brand==label)
    },
    //恢复数据
    fulldata(state){
      // console.log('数据恢复了')
      state.product_data=product_data;
    },
    //改变展示数据
    changedata2(state,color){
      console.log('我也执行了')
    state.product_data=product_data.filter(item=>color.indexOf(item.color)!=-1)
  console.log(state.product_data)
    // console.log('金色'==color)
    },
    // //恢复颜色数据
    fulldata2(state,color){
    state.product_data=product_data.filter(item=>color.indexOf(item.color)!=-1)
      
    }
  },
  actions: {
  },
  modules: {
  }
})
