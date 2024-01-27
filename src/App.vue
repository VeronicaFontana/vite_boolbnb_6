<script>
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
import axios from 'axios';
import {store} from './data/store.js';


export default{
  name: "App",
  data(){
    return{

    }
  },
  components:{
    Header,
    Footer
  },
  methods: {
    getServices() {
      axios.get(store.apiUrl, {
        params: {
        }
      })
      .then((res) => {
        store.services = res.data.services;
        console.log(store.services);
      })
      .catch(function (error) {
        console.log(error.message);
      })
    },
    resetWorld() {
      store.apartments = [],
      store.apartmentSingle = []
      store.results = []
      store.addresses = []
      store.sponsoredApartments = []
      store.filteredApartments = []
      store.servicesApartments = []
      
      store.inputSearch = ''
      store.lonA = ''
      store.latA = ''
    }
  },
  mounted() {
    this.resetWorld();
    this.getServices();
  }
}

</script>

<template>
  <Header />
  <RouterView />
  <Footer/>
</template>

<style lang="scss" scoped>

</style>
