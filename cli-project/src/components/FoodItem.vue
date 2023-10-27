<template>
     <div>
          <h1>{{ name }}</h1>
          <p>{{ message }}</p>
          <button @click="countClick(name)">Click</button>
     </div>
</template>


<script>
 export default {
    props:{
       name: {
          type:String,
          required:true
       },
       message: {
          type:String,
       },
       f: {
         type:Function
       }
    },
    data () {
        return {
           
         
        }
    },

    methods: {
        countClick(v) {
           this.$emit('countClickEvent', v)
        }
    }

  
 }
</script>

<style>
   
</style>