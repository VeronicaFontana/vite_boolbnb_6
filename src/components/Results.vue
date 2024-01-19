<script>
import { store } from '../data/store';
import CardResult from './partials/CardResult.vue';
  export default {

    name: 'Results',

    data() {
      return {
        store
      }
    },
    components:{
      CardResult
    },
    methods: {},
    computed: {},
    mounted() {

    }
    
  }

</script>

<template>
<CardResult v-for="result in store.results" :key="result.id" :result="result"/>
  
</template>

<style lang="scss" scoped>

.results-box{
  margin: 20px;

  .row{
    padding: 0px 0px 9px 12px;
    .col-3, .col-4{
      padding: 0;
      font-size: .6rem;
      color: grey;
    }
  }
}

</style>