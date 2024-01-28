<script>
import SearchBar from './SearchBar.vue';

  export default {
  name:'Header',
  data(){
    return{}
  },
  components:{
    SearchBar
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <header>
    <div class="row align-content-center align-items-center justify-content-center pt-3 pt-xs-2 pt-sm-0">
      <div class="col-3 px-3">
        <router-link class="text-decoration-none" :to="{name:'home'}"><p>BoolB&B</p></router-link>
      </div>

      <div class="col-6 ">
        <SearchBar class="d-none d-sm-flex"/>
      </div>

      <div class="col-3 align-items-center justify-content-center">
        <div class="dropdown">
          <a class="btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
          </a>

          <ul class="dropdown-menu">
            <li class="d-flex"><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login<i class="fa-solid fa-arrow-right-to-bracket"></i></a></li>
          </ul>
        </div>
        
        <span class="pe-3 d-none"><a href="http://127.0.0.1:8000/login">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></a></span>
        <router-link class="d-none" :to="{name: 'home'}">Home</router-link>
      </div>
    </div>
  </header>
</template>


<style lang="scss"  scoped>

@use '../../scss/partials/palette' as *;

header{
  position: fixed;
  height: 90px;
  width: 100%;
  top: 0;
  z-index: 998;
  box-shadow: 0 0 8px 0px rgba(0,0,0,0.3);
  background-color:$background-primary-header;
  p{
  color:$background-button;
  font-size: 2.3rem;
  font-weight: 600;
  }
  .col-3, .col-6{
    height: 90px;
    display: flex;
    align-items: center;
  }

.btn{
  padding: 10px;
  background-color:$background-button;
  i{
    font-size: 1.5rem;
  }
}
}



</style>