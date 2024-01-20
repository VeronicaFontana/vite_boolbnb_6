<script>
import {store} from '../data/store';

  export default {
  name:'ApartmentDetail',
  data(){
    return{
      store
    }
  },
  components:{
  },
  methods:{
    
  },
  mounted(){},
  computed:{}
  }
  </script>


<template>
  <div class="box_detailapartment">
<div class="row">

  <div class="col-10 offset-1 border-2">
    <div class="row">
      <div class="col-8 vedo">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime sit cupiditate necessitatibus consequatur dignissimos minima explicabo quod, nesciunt voluptas quae vitae nulla dolor praesentium modi quas velit omnis ipsam eum. Quam, alias magnam, placeat iste laudantium totam nam at corporis nisi ducimus delectus magni. Porro officia cumque officiis consectetur?</p>
    </div>

    <div class="col-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi minima dolor et eum nesciunt perspiciatis, optio aspernatur alias? Accusantium numquam nesciunt delectus ut incidunt aut debitis nostrum alias eligendi. Placeat adipisci vitae pariatur nostrum, inventore laudantium, corporis quae, odit odio magni vel maxime perspiciatis nisi modi obcaecati culpa quos quasi!
    </div>
    </div>
  </div>
</div>
  </div>
</template>

<style lang="scss" scoped>
.box_detailapartment{
  margin-top: 90px;
  .col-10{
    border: solid 1px black;
    background-color: brown;
    .row{
      .col-8{
      background-color: darkcyan;
      border: solid 1px rgb(182, 26, 26);
      

      }
      .col-4{
        background-color: darkorange;
      border: solid 1px rgb(15, 202, 56);

      }
    }
  }
}
</style>