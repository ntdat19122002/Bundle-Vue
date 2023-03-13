<template>
  <div class="product-detail">
    <div class="product-header">
      <!-- Title -->
      <div class="product-title">
        <router-link :to="{name:'shopPage',params:{page:1}}">Products</router-link> / {{ product.name }}
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
        <img v-if="product.image" :src="'data:image/png;base64,'+product.image" alt="Product Image">
        <img v-else src='../assets/images/product/default.png' alt="Product Image">
      </div>
      <div class="add-cart-process">
        <h1 class="product-title">{{ product.name }}</h1>
        <div class="product-price">$ {{ product.price }}</div>
        <div class="product-num">
          <div class="pp-button subtract-btn" @click="num--">
            -
          </div>
          <div>
            <input type="number" :value="num ">
          </div>
          <div class="pp-button add-btn" @click="num++">
            +
          </div>
        </div>
        <div @click="addToCart" class="mini-button add-cart-btn">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
        </div>
        <div v-if="product.description" class="description">
          {{ product.description }}
        </div>

        <!-- term -->
        <div class="term">
          <div><router-link :to="{name:'home'}">Terms and Conditions</router-link> </div>
          <div>30-day money-back guarantee</div>
          <div>Shipping: 2-3 Business Days</div>
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
  a{
    color: #267372;
  }
  a:hover{
    color: #133a39;
    text-decoration: underline;
  }
  .product-header>.product-title{
    background: #f0f0f0;
    padding:15px 20px;
  }
  .product-search{
    display: flex;
  }
  /* cart */
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

  .add-cart .product-title{
    font-family: "Source Sans Pro", "Odoo Unicode Support Noto", sans-serif;
    font-weight: 500;
    line-height: 1.5;
  }

  .add-cart .product-price{
    padding: 10px 0;
    font-size: 24px;
    font-weight: bold;
  }

  .product-num{
    display: flex;
    align-items: center;
    margin: 20px 0;
  }

  .product-num input{
    padding: 6px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 60px;
  }

  .subtract-btn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .pp-button{
    padding: 11px 14px;
  }

  .add-btn{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .add-cart-btn{
    font-size: 20px;
    width: 150px;
  }
  .description,.term{
    border-top: 1px solid #dadada;
    margin: 10px 0;
    padding-top: 10px;
  }

  .term div{
    line-height: 25px;
  }
  .term div:nth-child(1){
    color: #000;
  }

</style>