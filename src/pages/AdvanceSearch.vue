<script>
import {store} from '../data/store';
import Header from '../components/partials/Header.vue';
import SearchBar from '../components/partials/SearchBar.vue';
import Footer from '../components/partials/Footer.vue';
import Results from '../components/Results.vue';

  export default {
  name:'AdvanceSearch',
  data(){
    return{
      store
    }
  },
  components:{
    Header,
    SearchBar,
    Results,
    Footer
  },
  methods:{
    
  },
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <Header />
  <SearchBar />

  <section class="filter-box">
    <div class="ms-2 h-100 d-flex align-items-center">

      <!-- STANZE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Stanze
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" >Action</a></li>
          <li><a class="dropdown-item" >Another action</a></li>
          <li><a class="dropdown-item" >Something else here</a></li>
        </ul>
      </div>

      <!-- BAGNI -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bagni
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" >Action</a></li>
          <li><a class="dropdown-item" >Another action</a></li>
          <li><a class="dropdown-item" >Something else here</a></li>
        </ul>
      </div>

      <!-- CAMERE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Camere da letto
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" >Action</a></li>
          <li><a class="dropdown-item" >Another action</a></li>
          <li><a class="dropdown-item" >Something else here</a></li>
        </ul>
      </div>

      <!-- SUPERFICIE -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Superficie
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" >Action</a></li>
          <li><a class="dropdown-item" >Another action</a></li>
          <li><a class="dropdown-item" >Something else here</a></li>
        </ul>
      </div>

      <!-- SERVIZI -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Servizi
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" ><span class="badge text-bg-secondary">Secondary</span></a></li>
        </ul>
      </div>

    </div>
  </section>

  <Results />
  <Footer />
</template>

<style lang="scss" scoped>
.filter-box{
  width: 100vw;
  height: 60px;
  background-color: lightgrey;

  .dropdown{
    margin-right: 20px;
  }
}

</style>