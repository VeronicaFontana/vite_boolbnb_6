<script>
import SponsoredCards from '../components/SponsoredCards.vue';
import Jumbotron from '../components/partials/Jumbotron.vue';
import Footer from '../components/partials/Footer.vue';
import axios from 'axios';
import { store } from '../data/store';

  export default {
  name:'Home',
  data(){
    return{
      store
    }
  },
  components:{
    Jumbotron,
    SponsoredCards,
    Footer
  },
  methods:{
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
    }
  },
  mounted(){
    this.getServices();
  },
  computed:{}
  }
  </script>


<template>
  <Jumbotron />
  <div class="container_custom">
    <SponsoredCards />
  </div>
</template>


<style lang="scss"  scoped>
.container_custom{
  margin: 10px;
}
</style>
