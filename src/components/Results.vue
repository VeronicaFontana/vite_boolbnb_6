<script>
import { store } from '../data/store';
import CardResult from './partials/CardResult.vue';
import Loader from './Loader.vue';

  export default {

    name: 'Results',

    data() {
      return {
        store,
        isLoaded: false,
      }
    },
    components:{
      CardResult,
      Loader,
    },
    methods: {},
    computed: {
      
    },
    mounted() {
      // console.log(store.filteredApartments);
    }
    
  }

</script>

<template>
  <div class="box_cardResult">
    <!-- <div class="results-box" v-if="store.servicesApartments.length > 0">
      <CardResult v-for="result in store.servicesApartments" :key="result.id" :result="result"/>

    </div> -->

    <h4 class="pt-4 ps-4">Risultati ottenuti: {{ store.results.length }}</h4>
    
    <section class="results-box" v-if="store.results.length > 0">

      <CardResult v-for="result in store.results" :key="result.id" :result="result"/>

    </section>
    
    <h2 class="text-center " v-else >Non abbiamo nessun appartamento che soddisfi i tuoi criteri di ricerca &#9785;</h2>

    <!-- <section class="results-box" v-else>
      <CardFiltered  v-for="apartment in store.filteredApartments" :key="apartment" :apartment="apartment" />
    </section> -->

    <div>
      
    </div>
  </div>

  
</template>

<style lang="scss" scoped>
.box_cardResult{
  // display: flex;
  // flex-wrap: wrap;
  min-height:calc(100vh - 160px - 250px);
  position: relative;
  z-index:3;
  .results-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    max-width: 1700px;
    margin: 0 auto;
  }
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