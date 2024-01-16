<script>
  export default {
  name:'Card',
  props: {
    apartment: Object
  },
  data(){
    return{}
  },
  components:{
  },
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start h-100 object-fit-cover" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{apartment.title}}</h5>
        <p class="card-text">Descrizione</p>
      </div>
    </div>
  </div>
  </div>
</template>


<style lang="scss"  scoped>

</style>
