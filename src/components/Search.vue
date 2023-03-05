<template>
  <div class="nav-search">
        <div class="search mx-4">
            <input type="text" name="" id="" placeholder="Search...">
            <div class="mini-button search-button">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <div class="currency price-list pp-button mx-4">Public Pricelist</div>
        <div class="pagination mx-4 flex">
            <div class="pagination-button">Prev</div>
            <div class="pagination-button">1</div>
            <div class="pagination-button">2</div>
            <div class="pagination-button">Next</div>
        </div>
        <div class="type mx-4">
            <i class="fas fa-th-large pp-button"></i><i class="fa-sharp fa-solid fa-list-ul pp-button"></i>
        </div>
        <div class="sort pp-button mx-4">Sort by</div>
    </div>
</template>

<script>
export default {

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
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-search .price-list{

}
</style>