<template>
  <div class="product-detail">
    <div class="product-header">
      <div class="product-title">
        Product / {{ product.name }}
      </div>
      <div class="product-search">
        <div class="search mx-4">
          <input type="text" name="" id="" placeholder="Search..." class="thin-border">
          <div class="mini-button search-button">
              <i class="fa fa-search"></i>
          </div>
        </div>
        <div class="pp-button">
          Public Pricelist
        </div>
      </div>
      
    </div>
    <div class="add-cart">
      <div class="cart-item-img">
        <img :src="'data:image/png;base64,'+product.image" alt="">
      </div>
      <div class="add-cart-process">
        <div>{{ product.name }}</div>
        <div>$ {{ product.price }}</div>
        <div class="product-num">
          <div class="pp-button" @click="num--">
            -
          </div>
          <div>
            <input type="number" :value="num ">
            
          </div>
          <div class="pp-button" @click="num++">
            +
          </div>
        </div>
        <div @click="addToCart" class="mini-button">
          Add to Cart
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import {useRouter} from 'vue-router'
import { ref } from 'vue';
export default {
  props:['id'],
  setup(props){
    const router = useRouter()
    const num = ref(1)
    const product = ref(null)
    const load = async ()=>{
      try{
        let data = await fetch('https://odoo.website/bundle/api/'+props.id)
                          .then(res => res.json())
        product.value = data
      }
      catch(err){
        console.log(err.meassage);
      }
    }
    load()

    const addToCart = () => {
      router.push({name:'cart'})
    }

    return {num,load,product,addToCart}
  }
}
</script>
<style scoped>
  .product-detail{
    padding: 10px 19.5%;
  }
  .product-header{
    display: flex;
    justify-content: space-between;
  }
  .product-title{
    background: #f0f0f0;
    padding:15px 20px;
  }
  .product-search{
    display: flex;
  }
  .add-cart{
    display: flex;
    padding: 30px 0;
  }
  .cart-item-img{
    width: 70%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  .product-num{
    display: flex;
    align-items: center;
  }
</style>