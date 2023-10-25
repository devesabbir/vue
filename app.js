const app = Vue.createApp({

    data () {
        return {
            item: '',
            foods:JSON.parse(localStorage.getItem('foods')) || [],
            editMode: false,
            editIndex:-1,
            editItem: ''
          
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

    }
})

app.mount("#app")