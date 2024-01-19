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
  <div class="box_cardResult">
    <CardResult v-for="result in store.results" :key="result.id" :result="result"/>

  </div>
  
</template>

<style lang="scss" scoped>
.box_cardResult{
  display: flex;
  flex-wrap: wrap;
}

</style>