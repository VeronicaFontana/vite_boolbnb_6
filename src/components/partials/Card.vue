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
  <div class="card m-3" style="width: 18rem;">
  <img :src="`http://127.0.0.1:8000/storage/`+apartment.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{apartment.title}}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fa-solid fa-person-shelter"></i> {{ apartment.rooms }}</li>
    <li class="list-group-item"><i class="fa-solid fa-bed"></i> {{ apartment.beds }}</li>
    <li class="list-group-item"><i class="fa-solid fa-restroom"></i> {{ apartment.bathrooms }}</li>
    <li class="list-group-item"><i class="fa-solid fa-ruler-combined"></i> {{ apartment.square_meters }}m²</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Vai all'appartamento</a>
  </div>
</div>


</template>


<style lang="scss"  scoped>

</style>
