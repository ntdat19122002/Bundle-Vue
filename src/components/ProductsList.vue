<template>
  <div class="products-list">
    <div v-for="product in products" :key='product.name' class="product thin-border">
      <div>
        <router-link :to="{ name:'detail', params:{id:product.id}}">
          <img :src="'data:image/png;base64,'+product.image" alt="Product Image">
        </router-link>
      </div>
      <div class="label-product">
        <router-link :to="{ name:'detail', params:{id:product.id}}" class="product-link">
          {{ product.name }}
        </router-link>
        <div>
          $ {{product.price}}
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const products = ref([])
    const load = async ()=>{
      try{
        let data = await fetch('https://odoo.website/bundle/api')
                          .then(res => res.json())
        products.value = data.products
      }
      catch(err){
        console.log(err.meassage);
      }
    }
    load()

    return {load,products}
  }
}
</script>

<style>
  .products-list{
    margin:30px 20%;
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

  .product{
    position: relative;
    justify-content: center;
    margin: 10px;
    padding: 20px 20px 50px;
  }

  .product img{
    width: 100%;
    height: 100%;
  }

  .product .label-product{
    width: 100%;
    left: 0;
    bottom: 10px;
    position: absolute;
    text-align: center;
  }

  .product-link{
    color: #267372;
  }

  .product:nth-child(1){
    grid-area: 1/1/3/3;
  }
</style>