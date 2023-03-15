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
          <div class="product">
            Product
          </div>
          <div class="quantity">
            Quantity
          </div>
          <div class="price">
            Price
          </div>
        </div>
        <div class="cart-list-item" v-for="product in 5" :key="product">
          <div class="product">
            product
          </div>
          <div class="quantity">
            quantity
          </div>
          <div class="price">
            price
          </div>
        </div>
        <div class="cart-list-btn">
          <div class="pp-button"><router-link :to="{name:'shopPage',params:{page:1}}">Continue Shopping</router-link></div>
          <div class="mini-button"><router-link :to="{name:'shopPage',params:{page:1}}">Process Checkout</router-link></div>
        </div>
      </div>

      <!-- Cart Total -->
      <div class="cart-order">
        <div class="title">
          Order Total
        </div>
        <div class="subtotal row-order">
          <div>
            Subtotal:
          </div>
          <div>
            $ 5,685.00
          </div>
        </div>
        <div class="taxes row-order">
          <div>
            Taxes:
          </div>
          <div>
            $ 0.00
          </div>
        </div>
        <div class="total row-order">
          <div>
            Total:
          </div>
          <div>
            $ 5,685.00
          </div>
        </div>
        <div class="promotion-code">
          I have a promo code
        </div>
        <div class="checkout-btn">
          <span class="pp-button">Process Checkout</span>
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
    margin: 30px 30px 80px;
  }
  .item-status{
    position: absolute;
    top:-7.5px;
    text-align: center;
  }
  .item-status:nth-of-type(1){
    left: 15%;
  }
  .item-status:nth-of-type(2){
    left: 45%;
  }
  .item-status:nth-of-type(3){
    left: 75%;
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
  .cart-list-header{
    display: flex;
    font-weight: bold;
    padding: 10px;
    border-bottom: 2px solid #585858;
  }
  .cart-list-item{
    padding: 10px 0;
    display: flex;
  }
  .row-order{
    display: flex;
    margin: 10px 0;
    padding: 10px 0;
  }
  .row-order>div{
    width: 50%;
    text-align: end;
  }
  .cart-list .cart-list-item:nth-of-type(even){
    background: rgba(0, 0, 0, 0.05);
  }
  .total{
    border-top: 1px solid #000;
    font-weight: bold;
  }

  .cart-list-btn{
    margin-top: 20px;
    display: flex;
    justify-content:space-between;
  }
  .cart-order{
    width: 30%;
    border: 1px solid #999;
    padding: 20px;
  }

  .cart-order .title{
    font-size: 25px;
    padding-bottom: 20px;
    border-bottom: 1px solid #999;
  }

   a{
    color: white;
  }

  .product{
    width: 60%;
  }
  .quantity{
    width: 20%;
    text-align: center;
  }
  .price{
    width: 20%;
    text-align: center;
  }

  .promotion-code{
    text-align: end;
  }

  .checkout-btn{
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
  }

</style>