<script>
  import HomeSearchBar from './HomeSearchBar.vue';

  export default {
  name:'Jumbotron',
  data(){
    return{
    
    }
  },
  components:{ 
    HomeSearchBar
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <div class="img-box d-flex justify-content-center align-items-center">
    <div class="row w-100">
      <div class="col-10 col-sm-8 m-auto">
        <div class="input-group mb-3">
          <HomeSearchBar />

      </div>

    </div>
    </div>
  </div>
</template>


<style lang="scss"  scoped>

@use '../../scss/partials/palette' as *;

.img-box{
  width: 100%;
  margin-top: 90px;
  height: 600px;
  background: linear-gradient($background-filter-jumbo, $background-filter-jumbo), url("/public/532101_beautiful-house-hd-wallpapers_1920x1200_h.jpg");
  background-position: center center;
  background-size: cover;

  img{
    width: 100%;
    height: 100%;
  }
}

</style>