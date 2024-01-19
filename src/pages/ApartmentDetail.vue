<script>
import {store} from '../data/store';
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';

  export default {
  name:'ApartmentDetail',
  data(){
    return{
      store
    }
  },
  components:{
    Header,
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
  <SearchBar />
  <Results />
  <Footer />
</template>

<style lang="scss" scoped>

</style>