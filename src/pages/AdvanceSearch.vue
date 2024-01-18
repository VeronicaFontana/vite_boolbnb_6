<script>
import {store} from '../data/store';
import Header from '../components/partials/Header.vue';
import Jumbotron from '../components/partials/Jumbotron.vue'
import Footer from '../components/partials/Footer.vue';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store
    }
  },
  components:{
    Header,
    Jumbotron,
    Footer
  },
  methods:{
    
  },
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <Header />
  <ul>
    <li v-for="(result,index) in store.results" :key="index">
      <p>{{ result.apartment.title }}</p>
      <p></p>
    </li>
  </ul>
  <Footer />
</template>