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
  <h2 class="text-center " v-if="store.results.length == 0" >Non abbiamo nessun appartamento che soddisfi i tuoi criteri di ricerca &#9785;</h2>
  
</template>

<style lang="scss" scoped>
.box_cardResult{
  // display: flex;
  // flex-wrap: wrap;
  height:calc(100vh - 160px - 250px);
  position: relative;
  z-index:3;
  
}
h2{
    position: absolute;
    bottom:100%;
    z-index: 1;
    animation-name: testo;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    left: 50%;
    transform:translateX(-50%) ;
  }
  @keyframes testo{
    0% {bottom:100%;}
    100% {bottom:50%;}
  }

</style>