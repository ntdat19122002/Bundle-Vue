<template>
  <div class="cart">
    <div class="cart-status">
      <hr>
      <div class="item-status">
        <input type="radio" name="" id="">
        <div>Review order</div>
      </div>
      <div class="item-status">
        <input type="radio" name="" id="">
        <div>Address</div>
      </div>
      <div class="item-status">
        <input type="radio" name="" id="">
        <div>Confirm order</div>
      </div>
    </div>
    <div class="oder-process">
      <div class="cart-list">
        <div class="cart-list-header">
          product
          quantity
          price
        </div>
        <div>
          <div class="pp-button"><router-link :to="{name:'shopPage',params:{page:1}}">Continue Shopping</router-link></div>
          <button>Process Checkout></button>
        </div>
      </div>
      
      <div class="cart-order">
        order total
        <hr>
        Subtotal
        Taxes
        <hr>
        I have a promo code
        <div class="pp-button">
          Process Checkout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .cart{
    padding: 10px 20%;
  }
  .cart-status{
    position: relative;
    margin: 20px;
  }
  .item-status{
    position: absolute;
    top:-7.5px;
  }
  .item-status:nth-of-type(1){
    left: 20%;
  }
  .item-status:nth-of-type(2){
    left: 50%;
  }
  .item-status:nth-of-type(3){
    left: 80%;
  }

  .oder-process{
    margin: 30px 0;
    display: flex;
  }
  .cart-list{
    margin-right: 30px;
    border-top: 1px solid #999;
    width:70%;
  }
  .cart-order{
    width: 30%;
    border: 1px solid #999;
    padding: 10px;
  }
</style>