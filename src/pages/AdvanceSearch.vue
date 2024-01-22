<script>
import {store} from '../data/store';
import Results from '../components/Results.vue';
import Dropdown from '../components/partials/Dropdown.vue';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store,
      selectedValues: {
        stanze: null,
        bagni: null,
        camere: null,
        superficie: null,
        servizi: [], 
      }
    }
  },
  components:{
    Results,
    Dropdown
  },
  methods:{
    selectAndSearch({ value, category }) {
      this.selectedValues[category] = value;
    },
    executeQuery(){
      let query = {
        numeri: {
          stanze: this.selectedValues.stanze,
          bagni: this.selectedValues.bagni,
          camere: this.selectedValues.camere,
          superficie: this.selectedValues.superficie,
        },
        servizi: this.selectedValues.servizi,
      };
      
      console.log("Query:", query);

      this.selectedValues.stanze = null;
      this.selectedValues.bagni = null;
      this.selectedValues.camere = null;
      this.selectedValues.superficie = null;
    },
  },
  mounted(){
    
  },
  computed:{}
  }
  </script>


<template>
  <section class="filter-box">
    <div class="ms-2 h-100 d-flex align-items-center">

      <!-- STANZE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-person-shelter"></i> Stanze
        </button>
        <Dropdown category="stanze" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- BAGNI -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-restroom"></i> Bagni
        </button>
        <Dropdown category="bagni" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- CAMERE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bed"></i> Camere da letto
        </button>
        <Dropdown category="camere" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- SUPERFICIE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ruler-combined"></i> Superficie
        </button>
        <Dropdown category="superficie" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- SERVIZI -->
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-solid fa-bell-concierge"></i> Servizi
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Servizi disponibili</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div v-for="(service, index) in store.services" :key="index">
                <input type="checkbox" :id="'btn-check-outlined-' + index" class="btn-check" autocomplete="off" :value="service.name" v-model="selectedValues.servizi"/>
                <label :for="'btn-check-outlined-' + index" class="btn btn-outline-primary m-2" >{{ service.name }}</label> <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-danger" @click="executeQuery">Cerca</button>
    </div>
  </section>

  <Results />
</template>

<style lang="scss" scoped>
.filter-box{
  width: 100vw;
  margin-top: 90px;
  height: 60px;
  background-color: lightgrey;

  .dropdown{
    margin-right: 20px;
    
  }
}
</style>