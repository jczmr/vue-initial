const app = Vue.createApp({
    // template: `
    // <h1> Hi welcome </h1>
    // <p> From app.js </p>
    // `

    data() {
        return {
            quote: "I'm Ironman",
            author: 'Tony Stark'

        }
    },
    methods: {
        changeQuote() {
            console.log('hola Mundo');
            this.author = 'Jcuzmar'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }

    }
})

app.mount('#myApp')