<script>
  export default {
  name:'Dropdown',
  data(){
    return{}
  },
  components:{},
  methods:{
    selectAndSearch(value) {
      console.log("Valore selezionato:", value);
    },
  },
  mounted(){},
  computed:{}
  }
  </script>


<template>
<ul class="dropdown-menu p-0">
  <li>
    <a class="dropdown-item num" data-value="Indifferente" @click="selectAndSearch('Indifferente')">
      Indifferente 
    </a>
    <a class="dropdown-item num" data-value="1" @click="selectAndSearch('1')">
      1  
    </a>
    <a class="dropdown-item num" data-value="2" @click="selectAndSearch('2')">
      2
    </a>
    <a class="dropdown-item num" data-value="3" @click="selectAndSearch('3')">
      3 
    </a>
    <a class="dropdown-item num" data-value="4" @click="selectAndSearch('4')">
      4  
    </a>
    <a class="dropdown-item num" data-value="5+" @click="selectAndSearch('5+')">
      5+ 
    </a>
  </li>
</ul>
</template>


<style lang="scss"  scoped>

.dropdown-item{
  padding: 0px;
}
.num{
  padding: 10px 20px;
}

</style>