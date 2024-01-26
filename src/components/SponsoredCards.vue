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
          console.log(res.data.sponsoredApartments);

          this.isLoaded = true;
          this.store.sponsoredApartments = res.data.sponsoredApartments;
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

  <div class="container">
    <h2 class="my-2 text-center text-sm-start">Appartamenti in Evidenza</h2>
    <div class="box_structure d-sm-flex flex-sm-wrap">
      <Card v-for="apartment in store.sponsoredApartments" :key="apartment.id" :apartment="apartment" />
    </div>

  </div>

</template>

<style lang="scss" scoped>

</style>