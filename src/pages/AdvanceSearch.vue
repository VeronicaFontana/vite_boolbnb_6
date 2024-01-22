<script>
import {store} from '../data/store';
import Results from '../components/Results.vue';
import Dropdown from '../components/partials/Dropdown.vue';
import axios from 'axios';
import CardFiltered from '../components/partials/CardFiltered.vue';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store,
      axios,
      selectedServices: [], 
    }
  },
  components:{
    Results,
    Dropdown,
    CardFiltered
  },
  methods:{
    selectAndSearch({ value, category }) {
      store.selectedValues[category] = value;
    },
    executeQuery() {
      let query = {
        rooms: store.selectedValues.rooms,
        bathrooms: store.selectedValues.bathrooms,
        beds: store.selectedValues.beds,
        square_meters: store.selectedValues.square_meters,
        services: store.selectedValues.services,
      };

      console.log("Query:", query);

      this.getFilteredApartments();
    },
    getFilteredApartments(){
      axios.get(store.apiFilter, { 
        params:{ 
          services: store.selectedValues.services,
          rooms: store.selectedValues.rooms,
          bathrooms: store.selectedValues.bathrooms,
          beds: store.selectedValues.beds,
          square_meters: store.selectedValues.square_meters,
        }
        })
        .then(response => {
          this.store.filteredApartments = response.data.filteredApartments;
          console.log("Response from getFilteredApartments:", response.data);
        })
        .catch(error => {
          console.error(error);
        });
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
          <span>{{ store.selectedValues.rooms }}</span>
        </button>
        <Dropdown category="rooms" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- BAGNI -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-restroom"></i> Bagni
          <span>{{ store.selectedValues.bathrooms }}</span>
        </button>
        <Dropdown category="bathrooms" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- CAMERE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bed"></i> Camere da letto
          <span>{{ store.selectedValues.beds }}</span>
        </button>
        <Dropdown category="beds" @dropdown-selected="selectAndSearch" />
      </div>

      <!-- SUPERFICIE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ruler-combined"></i> Superficie
          <span>{{ store.selectedValues.square_meters }}</span>
        </button>
        <ul class="dropdown-menu p-0">
          <li>
            <a class="dropdown-item num" data-value="Indifferente" @click="selectAndSearch({ value: 'Indifferente', category: 'square_meters' })">
              Indifferente 
            </a>
            <a class="dropdown-item num" data-value="20" @click="selectAndSearch({ value: '20', category: 'square_meters' })">
              20  
            </a>
            <a class="dropdown-item num" data-value="40" @click="selectAndSearch({ value: '40', category: 'square_meters' })">
              40
            </a>
            <a class="dropdown-item num" data-value="60" @click="selectAndSearch({ value: '60', category: 'square_meters' })">
              60 
            </a>
            <a class="dropdown-item num" data-value="80" @click="selectAndSearch({ value: '80', category: 'square_meters' })">
              80 
            </a>
            <a class="dropdown-item num" data-value="100+" @click="selectAndSearch({ value: '100+', category: 'square_meters' })">
              100+ 
            </a>
          </li>
        </ul>
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

      <button type="button" class="btn btn-danger ms-3" @click="executeQuery()">Cerca</button>
    </div>
  </section>

    <Results v-if="store.filteredApartments.length === 0" />
    <CardFiltered v-else />
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