<script>
  import axios from 'axios'; 
  import {store} from '../../data/store.js'


  export default {
  name:'SearchBar',
  data(){
    return{
      inputSearch: '',
      results: [],
      mappedResults: [],
      timer:'',
      isLoaded: false
    }
  },
  components:{},
  methods:{

    checkTimer(){
      this.mappedResults = [];
      // this.isLoaded = false;

      if(this.timer != ''){
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(()=>{
        if(this.inputSearch.length > 3){
          this.checkInputValue(this.inputSearch);
        }
      },1000)

    },
  
    checkInputValue(inputSearch) {

      this.getAddress(inputSearch);
      setTimeout(() => {

        this.getFFAddress();
      }, 500)
        
    },

    getAddress(inputSearch) {
      axios.get(store.addressApiUrl + inputSearch + '.json', {
        params: {
          key: store.apiKey,
          // limit: 10,
          // ofs: 0,
          // entityTypeSet: 'Municipality, CountrySecondarySubdivision'
          // minFuzzyLevel: 2,
          typeahead: true,
          countrySet: 'IT',
        }
      })
    .then(res => {
      this.results = res.data;
        // this.results.forEach(result =>{
        // let position = result.position;
        // store.lonA = position.lon;
        // store.latA = position.lat;
    // })
  })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
    },


    getApiNostra(){
    axios.get(store.apiNostra,{
      params:{
        lonA: store.lonA,
        latA: store.latA
      }
    })
    .then(res =>{
      console.log(res.data)
    })
  },
  testFunzione(position){
    console.log(position);
  },
    
    getFFAddress() {
      this.isLoaded = false;
      this.mappedResults = [];
      this.mappedResults = this.results.results.map((el) => {
        // console.log(el.address.freeformAddress);
        // let element = el.address;
        // let new_address = element.freeformAddress + ', ' + element.countrySubdivisionName;
        let new_address = {
          string: el.address.freeformAddress + ', ' + el.address.countrySubdivisionName,
          id: el.id,
          position: {
            lat:el.position.lat,
            lon:el.position.lon
          }
        };
          
        // this.isLoaded = true;
        
        return new_address;
      
      })
        
    }
  },
  mounted(){},
  computed:{
    
  }
  }
  </script>


<template>
<div class="search-bar-container d-flex justify-content-center  align-items-center input-group mx-auto ">
  <input
  type="text"
  class="form-control"
  placeholder="Dove vuoi cercare?"
  aria-label="Dove vuoi cercare?"
  aria-describedby="button-addon2"
  @input="checkTimer()"
  id="input-search"
  v-model.trim="inputSearch"
  list="address-search-results"
  >
  <datalist id="address-search-results">
    <option v-for="address in this.mappedResults" :key="address.id" @click="testFunzione(address.position)" :value="address.string">{{address.string}}</option>
  </datalist>
  
  <form @submit.prevent="getApiNostra()">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getApiNostra()">Cerca</button>
</form>
</div>
</template>


<style lang="scss"  scoped>

.search-bar-container {
  width: 100vw;
  z-index: 9999;
  height: 90px;
  #input-search {
    width: 50%;
    z-index: 9999;
  }
}
</style>