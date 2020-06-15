
 <template>
   <div class="info">
        <div class="desc">
            <span>品牌</span>
            <ul v-for="label in labels" :key="label.id" class="category">
                <li class="label" @click="changeBrandstype(label)"
                :class="{on:brandstype===label}"
                >{{label}}</li>
            </ul>
        </div>
        <div class="desc">
            <span>颜色</span>
            <ul v-for="(color,index) in colors" :key="index" class="category">
                <li class="label" @click="changeColortype(color,index)"
                :class="{on:colortype.indexOf(color)!=-1}"
                >{{color}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

//去重函数
export default {
    data(){
        return{
            labels:this.$store.getters.brands,
            colors:this.$store.getters.colors,
            brandstype:'',
            colortype:[],
        }
    },
    methods:{
        changeBrandstype(e){
           if(e==this.brandstype){
                 this.brandstype='';
                 this.$store.commit('fulldata')
                //   this.$store.getters.goods=this.$store.getters.goods.filter(item=>item.brand==e)
                //   console.log(  this.goods=this.$store.getters.goods)
             }else{
                  this.$store.commit('fulldata')
                  this.brandstype=e;
                  
                //   console.log('11111111111111111111111111')
                //   console.log(this.$store.state.product_data)
                  this.$store.commit('changeData',e);
                  
                    // this.$store.getters.goods=this.$sotre.getters.goods.filter(item=>item.id==e)
             }
           
            // console.log(e)
        },
        
         changeColortype(color){
        if(this.colortype.indexOf(color)==-1){
            this.colortype.push(color);
            console.log('执行的这里')
            this.$store.commit('changedata2',this.colortype)
        }else{
            const num=this.colortype.indexOf(color);
            this.colortype.splice(num,1);
           if(this.colortype.length>=1){
                this.$store.commit('fulldata2',this.colortype)
           }else{
               this.$store.commit('fulldata')
           }
        }
    }
    }
}
</script>
<style lang="scss" scoped>
.category{
    display: inline-block;
    // margin: 5px 0;
    list-style: none;
    padding-left: 15px;;
    .label{
        background-color: lightseagreen;
        padding: 2px 15px;
       border-radius: 5px;
       cursor: pointer;
    }
    .on{
        background-color: lightyellow;
    }
}
</style>