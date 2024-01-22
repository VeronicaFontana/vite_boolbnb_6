<script>
import {store} from '../data/store';
import Results from '../components/Results.vue';
import Dropdown from '../components/partials/Dropdown.vue';
import axios from 'axios';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store,
      axios
    }
  },
  components:{
    Results,
    Dropdown
  },
  methods:{
    selectAndSearch({ value, category }) {
      store.selectedValues[category] = value;
    },
    executeQuery(){
      let query = {
        numeri: {
          stanze: store.selectedValues.stanze,
          bagni: store.selectedValues.bagni,
          camere: store.selectedValues.camere,
          superficie: store.selectedValues.superficie,
        },
        servizi: store.selectedValues.servizi,
      };

      this.getApartments();
      
      console.log("Query:", query);

      store.selectedValues.stanze = null;
      store.selectedValues.bagni = null;
      store.selectedValues.camere = null;
      store.selectedValues.superficie = null;
    },
    getApartments(){
      axios.get(store.apiUrl, {
        params:{
        }
      })
      .then((res) => {
        store.apartments = res.data.apartments;
        store.apartments.forEach(apartment=>{
          if(store.apartments.rooms == store.selectedValues.stanze){
            store.filteredApartments.push(apartment)
          }
        })
        console.log("appartamenti filtrati:" + store.filteredApartments)
      })
      .catch(function (error) {
        console.log(error.message);
      })
    }
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
                <input type="checkbox" :id="'btn-check-outlined-' + index" class="btn-check" autocomplete="off" :value="service.name" v-model="store.selectedValues.servizi"/>
                <label :for="'btn-check-outlined-' + index" class="btn btn-outline-primary m-2" >{{ service.name }}</label> <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-danger" @click="executeQuery()">Cerca</button>
    </div>
  </section>

  <div>
    <p v-for="apartment in store.filteredApartments" :key="apartment">
      nome dell'appartamento: {{ apartment.title }}
    </p>
  </div>

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