<template>
    <div class="multiple-bundle" v-for="multiple_bundle in 1" :key="multiple_bundle">
        <div class="title">
            Best seller
        </div>
        <div class="multiple-bundle-item" v-for="multiple_bundle_item in 2" :key="multiple_bundle_item">
            <div>
            <img src="" alt="Product">
            <div class="item-title">
                Clay plant pot
            </div>
            </div>
            <div>
            <div class="original-price">$9.99</div>
            <div class="price-after">$8.49</div>
            </div>
        </div>
        <div class="add-bundle">
            <div class="bundle-price">
                Total <span class="price-after">$25.48</span> <span class="original-price">29.98</span>
            </div>
            <button class="add-bundle-button">
                ADD BUNDLE
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .multiple-bundle{
        border-top: 1px solid rgb(177, 177, 177);
        padding: 10px;
    }
    .multiple-bundle .title{
        font-size: 24px;
        font-weight: 600;
        color: #494848;
        margin-bottom: 20px;
    }
    .multiple-bundle-item{
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d6d6d6;
    }
    .multiple-bundle-item div:nth-child(1){
        display: flex;
    }
    .multiple-bundle-item img{
        margin: 10px;
        width: 50px;
        height: 40px;
    }

    .multiple-bundle-item .item-title{
        color: #df000f;
        font-weight: 600;
    }

    .original-price{
        color: #d00000;
        text-decoration: line-through;
        font-weight: 500;
    }

    .price-after{
        color:#38cd6c;
        font-size: 18px;
        font-weight: 500;
    }

    .add-bundle{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }
    .add-bundle-button{
        padding: 15px 60px;
        background: #00dd4d;
        border-radius: 6px;
        font-weight: 700;
        color: white;
        border: none;
    }
</style>