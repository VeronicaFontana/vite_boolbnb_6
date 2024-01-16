<script>
import Card from '../components/partials/Card.vue';
import Jumbotron from '../components/partials/Jumbotron.vue';

  export default {
  name:'Home',
  data(){
    return{}
  },
  components:{
    Jumbotron,
    Card
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <Jumbotron />
  <Card />
</template>


<style lang="scss"  scoped>

</style>
