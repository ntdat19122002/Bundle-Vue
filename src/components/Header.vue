<template>
  <header>
    <div class="menu">
      <div class="logo">
        <img src="" alt="">
      </div>
      <div class="navbar">
        <ul>
          <li class="nav-item"><a href="">Home</a></li>
          <li class="nav-item"><a href="">Shop</a></li>
          <li class="nav-item"><a href="">Contact Us</a></li>
          <li class="nav-item"><a href="">Test menu</a></li>
          <li class="nav-item">
            <a href="">
              <i class="fa fa-shopping-cart"></i>
              <span class="count-item mini-button">0</span>
            </a>
          </li>
          <li class="nav-item"><a href="">Mitchel Admin</a></li>
        </ul>
      </div>
      <div class="contact">
        <a class="button mini-button" href="contact">Contact us</a>
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
</style>
