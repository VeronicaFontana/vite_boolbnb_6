<script>
  export default {
  name:'Header',
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
      <div class="col-3 justify-content-center">
        <h1>BoolB&B</h1>
      </div>

      <div class="col-6 justify-content-center">
        BARRA DI RICERCA
      </div>

      <div class="col-3 justify-content-end">
        <span class="pe-3">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></span>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'AdvanceSearch'}">Search</router-link>
      </div>
    </div>
  </header>
</template>


<style lang="scss"  scoped>

header{
  height: 90px;
  width: 100%;
  background-color: beige;
  position: fixed;
  top: 0;
  z-index: 999;

  .col-3, .col-6{
    height: 90px;
    display: flex;
    align-items: center;
  }
}



</style>