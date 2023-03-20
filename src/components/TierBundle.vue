<template>
    <div class="tier-bundle" v-for="bundle in product.bundle_tier" :key="bundle">
        <div class="title">
            {{bundle.title}}
        </div>
        <div class="tier-bundle-item">
            <div class="tier-img">
                <img v-if="product.image" :src="'data:image/png;base64,'+product.image" alt="Product Image">
                <img v-else src='../assets/images/product/default.png' alt="Product Image">
            </div>
            <div>
                <div class="title">{{ product.name }}</div>
                <div class="range-list">
                    <div class="range-list-item" v-for="qty in bundle.qty" :key="qty">
                        <div class="title-range">Add {{qty.start}}<span v-if="qty.end">-{{qty.end}}</span> items</div>
                        <div class="value-discount">Get {{qty.discount_value}}% off</div>
                        <div v-if="qty.highlight_enable" class="highlight">Most Popular</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props:['product'],
    setup(props){
        const product = ref(props.product);
        return {product}
    }
}
</script>

<style>
.tier-bundle{
    border-top: 1px solid rgb(177, 177, 177);
    padding: 10px;
}
.tier-bundle>.title{
    font-size: 24px;
    font-weight: 600;
    color: #494848;
    margin-bottom: 20px;
}
.tier-bundle-item{
    display: flex;
}
.tier-bundle-item img{
    width: 50px;
    height: 40px;
    margin: 10px 30px 0 10px;
}
.tier-bundle-item .title{
    color: rgb(198, 76, 32);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
}
.range-list{
    display: flex;
    text-align: center;
    flex-wrap: wrap;
}
.range-list-item{
    height: max-content;
    border: 1px solid #b6b6b6;
    border-radius: 6px;
    margin-right: 30px;
    margin-bottom: 10px;
}

.range-list-item .title-range{
    background: #4a393a;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    color: white;
    padding: 10px;
    font-weight: 600;
}

.highlight{
    background: #4a393a;
    border-radius: 4px;
    margin: 0 8px 4px;
    color: white;
    padding: 2px;
    font-size: 12px;
    font-weight: bold;
}
.range-list-item .value-discount{
    padding: 15px 0;
    font-weight: 550;
    color: #494848;
}
</style>