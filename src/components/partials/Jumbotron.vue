<script>
  export default {
  name:'Jumbotron',
  data(){
    return{}
  },
  components:{},
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <div class="img-box d-flex justify-content-center align-items-center">
    <div class="input-group mb-3 w-50">
      <input type="text" class="form-control" placeholder="Dove vuoi cercare?" aria-label="Dove vuoi cercare?" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
    </div>
  </div>
</template>


<style lang="scss"  scoped>

.img-box{
  width: 100%;
  height: 600px;
  background-image: url("/public/532101_beautiful-house-hd-wallpapers_1920x1200_h.jpg");
  background-position: center center;

  img{
    width: 100%;
    height: 100%;
  }
}

</style>