const { createApp } = Vue

createApp({
    data() {
        return {
            upiUrl: 'script/script.php',
            albums: [],
        }
    },
    created() {
        this.callAlbums()
    },
    methods: {
        callAlbums() {
            // Make a request for a user with a given ID
            axios.get(this.upiUrl)
                .then((response) => {
                    // handle success
                    this.albums = response.data;
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        }
    },

}).mount('#app');