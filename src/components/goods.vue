<template>
  <div class="goods">
      <div v-for="good in goods" :key="good.id" class="goods-box" >
         <div class="good" @click="addTocart(good.name,good.id)"> 
             <div class="desc">{{good.name}}</div>
             <img :src="good.image" />
             <div> {{good.cost}}</div>
         </div>
      </div>
      <!-- 小球动画 -->
       <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
        <span v-show="flag" class="round"></span>
        </transition>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // goods:[],
             flag:false,
             status:'hang'
        }
    },
    computed:{
        goods(){
       return this.$store.getters.goods;
        }
     
    //    console.log(this.goods)
    },
    methods:{
        addTocart(item,id){
            this.flag = !this.flag;
          
         this.$store.commit('addTocart',item,id);
        
        //  console.log(this.$store.state.cartItem);
         
        },
        /*动画钩子函数的第一个参数必须是el，是一个原生js对象，表示要添加动画的元素
                */
                beforeEnter(el){//动画开始之前，还没开始时的样式
                //    console.log(el)
                    // console.log(x)
                    // const div=document.getElementsByClassName('good');
                    // console.log(div,el)
                    el.style.transform ='translate(50px,0)';
                },
                enter(el,done){//动画开始后的样式，设置动画结束的状态
                    el.offsetWidth;//这句不写就没动画效果，但不到为啥，写就对了，offsetTop offsetHeight
                    el.style.transform = "translate(-100px,-320px)";
                    el.style.transition = "all 1s ease";
                    done();//相当于faterEnter函数，不加这行会有卡顿，延迟
                },
                afterEnter(){//动画结束之后调用
                    this.flag = !this.flag;
                }
    }
}
</script>

<style lang="scss" scoped>
.goods-box{
    // display: flex;
    
     border: 1px solid yellow;
    display: inline-block;
    vertical-align: middle;
     width: 200px;
    height: 200px;
    .good{
        cursor: pointer;
     text-align: center;
     .desc{
         height: 50px;
     }
     
    // flex: 1;
    img{
       
        width: 100px;
        height: 100px;
    }
}

}
.goods-box:hover{
    background-color: lightcyan;
}
  .round{
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #FF0000;
			}
			button{
				border: none;
				font-size: 20px;
				background-color: transparent;
				outline: none;
			}


</style>