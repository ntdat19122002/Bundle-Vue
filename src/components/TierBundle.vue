<template>
    <div class="tier-bundle" v-for="tier_bundle in 1" :key="tier_bundle">
        <div class="title">
            Buy more get more
        </div>
        <div class="tier-bundle-item">
            <div class="tier-img">
                <img src="" alt="asd">
            </div>
            <div>
                <div class="title">Brown Throw Pillows</div>
                <div class="range-list">
                    <div class="range-list-item" v-for="range in 5" :key="range">
                        <div class="title-range">Add 3-5 items</div>
                        <div class="value-discount">Get 5% off</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
.range-list-item .value-discount{
    padding: 15px 0;
    font-weight: 550;
    color: #494848;
}
</style>