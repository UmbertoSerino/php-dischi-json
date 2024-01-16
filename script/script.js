const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'http://127.0.0.1/repo_di_prova/PHP/php-dischi-json/php/script.php',
            albums: [],
        }
    },

    methods: {
        callAlbums() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.albums = response.data;
                    console.log(this.albums);
                }).catch((error) => {
                    // handle error
                    console.log(error);
                })
                .finally(() => {
                    // always executed
                });

        }
    },
    created() {
        this.callAlbums()
    }
}).mount('#app');