<script>
import {store} from '../data/store';
import Header from '../components/partials/Header.vue';
import SearchBar from '../components/partials/SearchBar.vue';
import Footer from '../components/partials/Footer.vue';
import Results from '../components/Results.vue';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store
    }
  },
  components:{
    Header,
    SearchBar,
    Results,
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
  <div class="container_custom">
    <SearchBar />
    <Results />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.container_custom{
  height: 100vh;
}
</style>