const app = Vue.createApp({
    data () {
        return {
            message: 'Hello world!',
            foods: ['Apple', 'Orange', 'Pineapple']
        }
    }
})

app.mount("#app")