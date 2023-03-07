<template lang="">
    <div>
      Product/{{ product.name }}
    </div>
    <img :src="'data:image/png;base64,'+product.image" alt="">
    
</template>
<script>
import { ref } from 'vue';
export default {
  props:['id'],
  setup(props){
    const product = ref(null)
    const load = async ()=>{
      try{
        let data = await fetch('https://odoo.website/bundle/api/'+props.id)
                          .then(res => res.json())
        product.value = data
      }
      catch(err){
        console.log(err.meassage);
      }
    }
    load()

    return {load,product}
  }
}
</script>
<style lang="">
    
</style>