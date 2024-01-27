<script>
  import axios from 'axios';
  import {store} from '../data/store.js'
  import Card from './partials/Card.vue';
  import Loader from './Loader.vue';


  export default {

    name: 'SponsoredCards',

    components: {
      Card,
      Loader
    },

    data() {
      return {
        store,
        isLoaded: false,
      }
    },

    methods: {
      
      getApartments() {
        this.isLoaded = false;

        axios.get(store.apiUrl, {
          params: {
          }
        })
        .then((res) => {
          //store.apartments = res.data.apartments;
          // console.log(res.data.apartments);
          console.log(res.data.apartments);

          store.sponsoredApartments = res.data.apartments.filter((el) => {
            console.log(el.isSponsored)
            if (el.isSponsored) {
              return el
            }
          })
          // console.log(store.sponsoredApartments)
          this.isLoaded = true;
          // this.store.sponsoredApartments = res.data.sponsoredApartments;
        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        })
      }
    },
    computed: {},
    mounted() {
      this.getApartments();
    }
    
  }

</script>

<template>

  <h2 class="mx-2">Appartamenti in Evidenza</h2>

  <Loader v-if="!isLoaded" />

  <div v-else class="container_custom border-1 d-flex flex-wrap">
    <Card v-for="apartment in store.sponsoredApartments" :key="apartment.id" :apartment="apartment" />
  </div>

</template>

<style lang="scss" scoped>
.container_custom{
  margin: auto;
  
}
</style>