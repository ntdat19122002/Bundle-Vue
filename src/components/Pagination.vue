<template>
  <div class="pagination mx-4 flex">
        <div class="pagination-button eraser-border-right thin-border prev-button">Prev</div>
        <div><router-link :to="{name:'shop'}" class="pagination-button eraser-border-right thin-border">1</router-link></div>
        <div class="pagination-button eraser-border-right thin-border">2</div>
        <div class="pagination-button thin-border next-button">Next</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.eraser-border-right{
    border-right: none !important;
}
.pagination-button{
  padding: 9px 12px;
  color: var(--mini-button);
}

.prev-button{
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.next-button{
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.pagination .router-link-active{
    display: block;
    color: white ;
    background: var(--mini-button);
}

</style>