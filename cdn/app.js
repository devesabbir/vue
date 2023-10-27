const app = Vue.createApp({
    

    data () {
        return {
            loader: true,
            item: '',
            foods:JSON.parse(localStorage.getItem('foods')) || [],
            editMode: false,
            editIndex:-1,
            editItem:'',
            games:['Cricket', 'Football', 'BasketBall'],
            checked:[]

        }
    },

    methods: {
       addItemToArray: function () {
        if (this.item) {
          const arry = this.foods
          arry.push(this.item)
          localStorage.setItem('foods', JSON.stringify(arry))
          this.item = ''
        }
          
       },

       updataArray: function () {
           this.foods[this.editIndex] =  this.editItem
           localStorage.setItem('foods', JSON.stringify(this.foods))
           this.editItem= ''
           this.editIndex = -1
           this.editMode = false
       },

       removeFromArray: function (index) {
          this.foods.splice(index, 1)
          localStorage.setItem('foods', JSON.stringify(this.foods))
       },

       editItemFu: function (index) {
           this.editItem = this.foods[index]
           this.editMode = true
           this.editIndex = index
       },

       handleChange: function (e) {
          const value = e.target.value
          const index = this.checked.findIndex((item) => item === value)
          if (index === -1) {
             this.checked.push(value)
          } else {
             this.checked.splice(index, 1)
          }
       },


    },


  
    beforeCreate: function () {
        console.log('beforeCreated')
    },
    created: function () {
        console.log('created')
    },

    beforeMount: function () {
        console.log('beforeMount')
    },

    mounted: function () {
        console.log('mounted')
        this.loader = false
    },

    beforeUpdate: function () {
        console.log('beforeUpdate')
    },

    updated: function () {
        console.log('updated')
        console.log('updated')
    },

    beforeDestroy: function () {
        console.log('beforeDestroy')
    },

    destroyed: function () {
        console.log('destroyed')
    }
  
})

app.mount("#app")