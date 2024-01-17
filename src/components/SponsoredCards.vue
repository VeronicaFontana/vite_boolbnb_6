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

  <div class="border-1 ">
    <h2>test SponsoredCards</h2>

    <Card v-for="apartment in store.apartments" :key="apartment.id" :apartment="apartment" />
  </div>

</template>

<style>

</style>