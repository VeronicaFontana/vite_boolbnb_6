<script>
  export default {
  name:'Home',
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
  <header>
    <div class="row">
      <div class="col-3 bg-danger ">
        LOGO
      </div>

      <div class="col-6 bg-warning">
        BARRA DI RICERCA
      </div>

      <div class="col-3">
        <span><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
      </div>
    </div>
  </header>
</template>


<style lang="scss"  scoped>

header{
  height: 90px;
  width: 100%;
  background-color: beige;

  .col-3, .col-6{
    height: 90px;
    display: flex;
    align-items: center;
  }
}



</style>