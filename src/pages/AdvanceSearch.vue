<script>
import {store} from '../data/store';
import Results from '../components/Results.vue';
import Dropdown from '../components/partials/Dropdown.vue';
import SearchBar from '../components/partials/SearchBar.vue';
import axios from 'axios';
import Loader from '../components/Loader.vue';


  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store,
      axios,
      selectedServices: [], 
      slider: 20000,
      isLoaded: false
    }
  },
  components:{
    Results,
    Dropdown,
    Loader,
    SearchBar
  },
  methods:{
    selectAndSearch({ value, category }) {
      console.log('value:', value, 'cat.', category)
      store.selectedValues[category] = value;
      console.log(store.selectedValues);
      this.getFilteredApartments();
    },

    executeQuery(name) {

      let servicesArray = store.selectedValues.services;
      
      let index = servicesArray.indexOf(name);

      // if(servicesArray.length == 0) {
      //   store.selectedValues.services.push(name);
      // }

      if (index > -1) {
        servicesArray.splice(index, 1);
      } else {
        store.selectedValues.services.push(name);
      }

      // console.log(servicesArray)
      this.getFilteredApartments();

    },

    getFilteredApartments(){
      store.isLoaded = false;

      // axios.defaults.baseURL = 'http://127.0.0.1:8000';
      axios.get(store.apiTest, { 
        params:{ 
          // results: JSON.stringify(store.results),
          radius: this.slider,
          lonA: store.lonA,
          latA: store.latA,
          services: store.selectedValues.services,
          rooms: store.selectedValues.rooms,
          beds: store.selectedValues.beds,
        }
        })
        .then(response => {
          // console.log(response.data.apartments)
          console.log("Response from results:", response.data);
          store.results = response.data.apartments;
          store.isLoaded = true;
          // if(response.data.servicesQuery.length > 0) {
          //   store.results = response.data.servicesQuery
          // } else {
          //   store.results = response.data.apartments;
          // }
          // store.results.sort(function(a, b) {
          //   return a.distance - b.distance;
          // });

        })
        .catch(error => {
          console.error(error);
        });
    },

    getApiNostra(){
      store.isLoaded = false;

      axios.get(store.apiTest, {
        params:{ 
          radius: this.slider,
          lonA: store.lonA,
          latA: store.latA,
        }
      })
    .then(res =>{
      console.log(res.data);
      store.results = res.data.apartments;
      store.isLoaded = true;
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
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Servizi disponibili</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-for="(service, index) in store.services" :key="index">
            <input type="checkbox" :id="'btn-check-outlined-' + index" class="btn-check" autocomplete="off" :value="service.name" />
            <label :for="'btn-check-outlined-' + index" class="btn btn-outline-primary m-2" category="services" @click="executeQuery(service.name)" >{{ service.name }}</label> <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="filter-box">
    <div class="ms-2 h-100 d-flex align-items-center">

      <SearchBar :input_id="'input_search_mobile'" :input_list="'address-list_mobile'" class="d-sm-none w-75"/>

      <div class="d-none d-sm-flex d-flex align-items-center">
        <!-- STANZE -->
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-person-shelter"></i> Stanze:
            <span>{{ store.selectedValues.rooms }}</span>
          </button>
          <Dropdown category="rooms" @dropdown-selected="selectAndSearch" />
        </div>
        <!--FINE STANZE -->

        <!-- CAMERE -->
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bed"></i> Letti:
            <span>{{ store.selectedValues.beds }}</span>
          </button>
          <Dropdown category="beds" @dropdown-selected="selectAndSearch" />
        </div>
        <!-- FINE CAMERE -->

        <!-- SERVIZI -->
        <div class="dropdown">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-bell-concierge"></i> Servizi
          </button>
        </div>

        
        <!--FINE SERVIZI -->

        <!--RAGGIO -->
        <div class="radius-slider">
          <input type="range" min="2000" max="100000" step="10000" name="radius" id="radius" value="20000" v-model="slider" @change="getApiNostra()">
        </div>
        <!--FINE RAGGIO -->
        
      </div>
    </div>
  </section>

  <section class="filter-box-responsive d-sm-none">
    <div class="ms-2 h-100 d-flex align-items-center">

      <div class=" d-flex w-100 justify-content-evenly align-items-center">
        <!-- STANZE -->
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-person-shelter"></i> Stanze:
            <span>{{ store.selectedValues.rooms }}</span>
          </button>
          <Dropdown category="rooms" @dropdown-selected="selectAndSearch" />
        </div>
        <!--FINE STANZE -->

        <!-- CAMERE -->
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bed"></i> Letti:
            <span>{{ store.selectedValues.beds }}</span>
          </button>
          <Dropdown category="beds" @dropdown-selected="selectAndSearch" />
        </div>
        <!-- FINE CAMERE -->

        <!-- SERVIZI -->
        <div class="dropdown">
          <!-- BUTTON DEL MODAL RESPONSIVE CHA STA FUORI DALLA SECTION -->
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-bell-concierge"></i> Servizi
          </button>
        </div>
        <!--FINE SERVIZI -->


        <!--RAGGIO -->
        <div class="radius-slider">
          <input type="range" min="2000" max="100000" step="10000" name="radius" id="radius" value="20000" v-model="slider" @change="getApiNostra()">
        </div>
        <!--FINE RAGGIO -->
        
      </div>
    </div>
  </section>

  <Results />

</template>

<style lang="scss" scoped>

@use '../scss/partials/palette' as *;

.filter-box{
  width: 100vw;
  margin-top: 90px;
  height: 60px;
  background-color: lightgrey;

  .dropdown{
    margin-right: 20px;
  }
}
.filter-box-responsive{
  width: 100vw;
  height: 60px;
  background-color: lightgrey;

}
</style>