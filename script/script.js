const { createApp } = Vue

createApp({
    data() {
        return {

        }
    },
    created() {
        this.createConsole()
    },
    methods: {
        createConsole() {
            console.log('ciao')
        }
    },

}).mount('#app');