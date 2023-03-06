<template lang="">
    <div>
      alo
      {{ id }}
    </div>
</template>
<script>
export default {
  props:['id'],
  setup(props){
    // const product = ref({})
    // const load = async ()=>{
    //   // try{
        console.log(props.id);
  //     //   let data = await fetch('https://odoo.website/bundle/api/'+props.id)
  //     //                     .then(res => res.json())
  //     //   product.value = data.products
  //     // }
  //     // catch(err){
  //     //   console.log(err.meassage);
  //     // }
  //   }
  //   load()

  //   return {load,product}
  }
}
</script>
<style lang="">
    
</style>