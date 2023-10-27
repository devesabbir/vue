<template>
     <div>
         <h1>{{ message }}</h1>
         <foodItem @countClickEvent="click" v-for="item in nameArray" :key="item.name" :name="item.name" :message="item.message"/>
         <p>{{ name + ':' +count }}</p>
     </div>
</template>

<script>
   export default {
       data () {
          return {
             name: '',
             message:'Hello vue js',
             count:0,
             nameArray:[
              {
                name: 'name 1',
                message: 'Hello vue js',  
              },
              {
                name: 'name 2',
                message: 'Hello vue js 2',
              },
              {
                name: 'name 3',
                message: 'Hello vue js 3',
              }
            ]
          }
       },

       methods: {
          click (value) {
             this.count++
             this.name = value             
          }
       }
   }


</script>

<style>

</style>