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
    <div class="container">

      <div class="row pt-xs-2 pt-sm-0">
        <div class="col-3 align-items-center">
          <router-link class="text-decoration-none p-2 pt-3 " :to="{name:'home'}"><p>BoolB&B</p></router-link>
        </div>
  
        <div class="col-6 ">
          <SearchBar :input_id="'input_search'" :input_list="'address-list'" class="d-none d-sm-flex"/>
        </div>
  
        <div class="col-3 align-items-center justify-content-end">
          <div class="dropdown d-sm-none">
            <a class="btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-bars"></i>
            </a>
  
            <ul class="dropdown-menu">
              <li class="d-flex"><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login<i class="fa-solid fa-arrow-right-to-bracket"></i></a></li>
            </ul>
          </div>
          
          <a href="http://127.0.0.1:8000/login" class="btn d-none d-sm-flex d-flex align-items-center" role="button">Login <i class="fa-solid fa-arrow-right-to-bracket ms-2"></i></a>
        </div>
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

  .dropdown{
    .btn{
      background-color: $background-button;
      color: $background-secondry-body;
      border: 1px solid $background-secondry-body;
    }
  }
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