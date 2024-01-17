<script>
import SponsoredCards from '../components/SponsoredCards.vue';
import Jumbotron from '../components/partials/Jumbotron.vue';
import Footer from '../components/partials/Footer.vue';

  export default {
  name:'Home',
  data(){
    return{}
  },
  components:{
    Jumbotron,
    SponsoredCards,
    Footer
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <Jumbotron />
  <div class="container_custom">
    <SponsoredCards />

  </div>
  <Footer />
</template>


<style lang="scss"  scoped>
.container_custom{
  margin: 10px;
}
</style>
