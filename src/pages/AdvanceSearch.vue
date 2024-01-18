<script>
import Header from '../components/partials/Header.vue';
import SearchBar from '../components/partials/SearchBar.vue'
import Footer from '../components/partials/Footer.vue';
import Results from '../components/Results.vue'

  export default {
  name:'AdvanceSearch',
  data(){
    return{}
  },
  components:{
    Header,
    SearchBar,
    Results,
    Footer
  },
  methods:{},
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