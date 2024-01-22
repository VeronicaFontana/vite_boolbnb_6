<script>
import {store} from '../data/store';
import Results from '../components/Results.vue';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store
    }
  },
  components:{
    Results,
  
  },
  methods:{
    
  },
  mounted(){},
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
        <ul class="dropdown-menu p-0">
          <li>
            <a class="dropdown-item" >
              <div class="p-3">
                <input type="text" placeholder="Da" class="mx-2">
                <input type="text" placeholder="A">
              </div>
            </a>
          </li>
          <li>
            <a class="dropdown-item num">
              Indifferente 
            </a>
            <a class="dropdown-item num">
              1  
            </a>
            <a class="dropdown-item num">
              2
            </a>
            <a class="dropdown-item num">
              3 
            </a>
            <a class="dropdown-item num">
              4  
            </a>
            <a class="dropdown-item num">
              5+ 
            </a>
          </li>
          <li>
            <a class="dropdown-item" >
              <div class="p-3 d-flex justify-content-center">
                <button type="button" class="btn btn-danger">Cerca</button>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- BAGNI -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-restroom"></i> Bagni
        </button>
        <ul class="dropdown-menu p-0">
          <li>
            <a class="dropdown-item" >
              <div class="p-3">
                <input type="text" placeholder="Da" class="mx-2">
                <input type="text" placeholder="A">
              </div>
            </a>
          </li>
          <li>
            <a class="dropdown-item num">
              Indifferente 
            </a>
            <a class="dropdown-item num">
              1  
            </a>
            <a class="dropdown-item num">
              2
            </a>
            <a class="dropdown-item num">
              3 
            </a>
            <a class="dropdown-item num">
              4  
            </a>
            <a class="dropdown-item num">
              5+ 
            </a>
          </li>
          <li>
            <a class="dropdown-item" >
              <div class="p-3 d-flex justify-content-center">
                <button type="button" class="btn btn-danger">Cerca</button>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- CAMERE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bed"></i> Camere da letto
        </button>
        <ul class="dropdown-menu p-0">
          <li>
            <a class="dropdown-item" >
              <div class="p-3">
                <input type="text" placeholder="Da" class="mx-2">
                <input type="text" placeholder="A">
              </div>
            </a>
          </li>
          <li>
            <a class="dropdown-item num">
              Indifferente 
            </a>
            <a class="dropdown-item num">
              1  
            </a>
            <a class="dropdown-item num">
              2
            </a>
            <a class="dropdown-item num">
              3 
            </a>
            <a class="dropdown-item num">
              4  
            </a>
            <a class="dropdown-item num">
              5+ 
            </a>
          </li>
          <li>
            <a class="dropdown-item" >
              <div class="p-3 d-flex justify-content-center">
                <button type="button" class="btn btn-danger">Cerca</button>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- SUPERFICIE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ruler-combined"></i> Superficie
        </button>
        <ul class="dropdown-menu p-0">
          <li>
            <a class="dropdown-item" >
              <div class="p-3">
                <input type="text" placeholder="Da" class="mx-2">
                <input type="text" placeholder="A">
              </div>
            </a>
          </li>
          <li>
            <a class="dropdown-item num">
              Indifferente 
            </a>
            <a class="dropdown-item num">
              1  
            </a>
            <a class="dropdown-item num">
              2
            </a>
            <a class="dropdown-item num">
              3 
            </a>
            <a class="dropdown-item num">
              4  
            </a>
            <a class="dropdown-item num">
              5+ 
            </a>
          </li>
          <li>
            <a class="dropdown-item" >
              <div class="p-3 d-flex justify-content-center">
                <button type="button" class="btn btn-danger">Cerca</button>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- SERVIZI -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bell-concierge"></i> Servizi
        </button>
        <div class="dropdown-menu service-box">
          <div class="d-flex flex-wrap px-2">
            <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
            <label v-for="service in store.services" :key="service" class="btn btn-outline-primary m-2" for="btn-check-outlined">{{ service.name }}</label><br>
          </div>
          
        </div>
      </div>

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

    .service-box{
      width: 350px;
    }

    .dropdown-item{
      padding: 0px;
    }
    .num{
      padding: 10px 20px;
    }
    
  }
}

</style>