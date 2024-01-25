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
      axios,
      selectedServices: [], 
      slider: 20000
    }
  },
  components:{
    Results,
    Dropdown,
  },
  methods:{
    selectAndSearch({ value, category }) {
      store.selectedValues[category] = value;
    },
    getFilteredApartments(){
      axios.defaults.baseURL = 'http://127.0.0.1:8000';
      axios.get(store.apiFilter, { 
        params:{ 
          results: JSON.stringify(store.results),
          services: store.selectedValues.services,
          rooms: store.selectedValues.rooms,
          beds: store.selectedValues.beds,
        }
        })
        .then(response => {
          store.filteredApartments = response.data.filteredApartmentsWithDistance;
          console.log("Response from getFilteredApartments:", response.data);
          store.filteredApartments.sort(function(a, b) {
            return a.distanza - b.distanza;
          });

        })
        .catch(error => {
          console.error(error);
        });
    },

    getApiNostra(){
      axios.get(store.apiNostra, {
        params:{ 
          radius: this.slider,
          lonA: store.lonA,
          latA: store.latA,
        }
      })
    .then(res =>{
      console.log(res.data);
      store.results = res.data
      // console.log( store.results )
    })
  },

  },
  mounted(){
    console.log(store.results);
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
          <span>{{ store.selectedValues.rooms }}</span>
        </button>
        <Dropdown category="rooms" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- CAMERE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bed"></i> Camere da letto
          <span>{{ store.selectedValues.beds }}</span>
        </button>
        <Dropdown category="beds" @dropdown-selected="selectAndSearch" />
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
                <input type="checkbox" :id="'btn-check-outlined-' + index" class="btn-check" autocomplete="off" :value="service.name" v-model="store.selectedValues.services"/>
                <label :for="'btn-check-outlined-' + index" class="btn btn-outline-primary m-2" >{{ service.name }}</label> <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="radius-slider">
        <input type="range" min="2000" max="100000" step="10000" name="radius" id="radius" value="20000" v-model="slider" @change="getApiNostra()">
      </div>

      <button type="button" class="btn btn-success ms-3" @click="getFilteredApartments()">Filtra i risultati</button>
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