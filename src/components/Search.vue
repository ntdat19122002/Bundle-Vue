<template>
  <div class="nav-search">
        <div class="search mx-4">
            <input type="text" name="" id="" placeholder="Search..." class="thin-border">
            <div class="mini-button search-button">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <div class="currency price-list pp-button mx-4">Public Pricelist</div>
        <Pagination/>
        <div class="type mx-4">
            <i class="fas fa-th-large pp-button"></i><i class="fa-sharp fa-solid fa-list-ul pp-button"></i>
        </div>
        <div class="sort pp-button mx-4">Sort by</div>
    </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  components: { Pagination },

}
</script>

<style>

.nav-search{
  margin-top: 8px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search{
  position: relative;
}

.search input{
  padding: 6px 23px 6px 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border-radius: 5px;
  width: 282px;
}

.search .search-button{
  position: absolute;
  width: 38px;
  height: 38px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-search .price-list{

}
</style>