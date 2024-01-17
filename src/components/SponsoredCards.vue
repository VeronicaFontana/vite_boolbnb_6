<script>
  import axios from 'axios';
  import {store} from '../data/store.js'
  import Card from './partials/Card.vue';


  export default {

    name: 'SponsoredCards',

    components: {
      Card
    },

    data() {
      return {
        store
      }
    },

    methods: {
      getApartments() {
        axios.get(store.apiUrl, {
          params: {
          }
        })
        .then((res) => {
          store.apartments = res.data.apartments;
          // console.log(res.data.apartments);
          this.store.sponsoredApartments = store.apartments.filter(apartment => apartment.sponsors.length > 0);
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
  <div class="container_custom border-1 d-flex flex-wrap">

    <Card v-for="apartment in store.sponsoredApartments" :key="apartment.id" :apartment="apartment" />
  </div>

</template>

<style lang="scss" scoped>
.container_custom{
  margin: auto;
  
}
</style>