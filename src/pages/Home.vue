<script>
import SponsoredCards from '../components/SponsoredCards.vue';
import Jumbotron from '../components/partials/Jumbotron.vue';

  export default {
  name:'Home',
  data(){
    return{}
  },
  components:{
    Jumbotron,
    SponsoredCards
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <Jumbotron />
  <SponsoredCards />
</template>


<style lang="scss"  scoped>

</style>
