<template>
  <header>
    <div class="menu">
      <div class="logo">
        <a href="/"><img src="../assets/images/logo/logo.png" alt="asdf"></a>
      </div>
      <div class="navbar">
        <ul>
          <li class="nav-item"><router-link :to="{name:'home'}">Home</router-link></li>
          <li class="nav-item"><router-link :to="{name:'shop'}">Shop</router-link></li>
          <li class="nav-item"><router-link :to="{name:'contact'}">Contact Us</router-link></li>
          <li class="nav-item"><router-link :to="{name:'home'}">Test menu</router-link></li>
          <li class="nav-item">
            <router-link :to="{name:'cart'}">
              <i class="fa fa-shopping-cart"></i>
              <span class="count-item mini-button">0</span>
            </router-link>
          </li>
          <li class="nav-item"><a href="">Mitchel Admin</a></li>
        </ul>
      </div>
      <div class="contact">
        <router-link class="button mini-button" :to="{name:'contact'}">Contact us</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header{
    height: 56px;
    padding: 8px 16px;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
  }

  header .menu{
    display: flex;
    margin: 0 330px !important;
    padding: 0 15px;
  }

  .menu .logo img{
    margin-right: 24px;
  }

  .menu .navbar{
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .menu .navbar ul{
    display: flex;
  }

  .navbar .nav-item{
    padding: 8px;
  }

  .navbar .nav-item:nth-child(5){
    margin: 0 16px;
  }
  .navbar .count-item{
    position: absolute;
    font-size: 13px;
    padding: 4px;
    top: 12px;
    margin-left: 2px;
  }

  .navbar .nav-item:nth-child(6){
    margin-left: 316px;
  }

  .navbar .nav-item a{
    color: rgba(0, 0, 0, 0.5);
  }


  .menu .contact{
      float: right;
      display: flex;
      align-items: center;
  }

  .contact a{
      margin-left: 24px;
      padding: 10px 12px;
  }

  .navbar .router-link-active{
    color: rgb(35, 35, 35) !important;
  }
</style>
