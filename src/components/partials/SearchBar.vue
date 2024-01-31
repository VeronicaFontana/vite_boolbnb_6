<script>
  import axios from 'axios'
  import {store} from '../../data/store.js'


  export default {
  name:'SearchBar',
  data(){
    return{
      inputSearch: '',
      results: [],
      mappedResults: [],
      timer:'',
      isLoaded: false,
      condizione: false,
      list: this.input_list,
      input_id: this.input_id
    }
  },
  props:
    [
      'input_id', 
      'input_list'
    ]
  ,
  components:{},
  methods:{

    checkTimer(){
      this.mappedResults = [];
      //store.inputSearch = "";

      if(this.timer != ''){
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(()=>{
        if(this.inputSearch.length > 3){
          this.checkInputValue(this.inputSearch);
        }
      },500)
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
      axios.get(store.apiTest, {
        params:{ 
          lonA: store.lonA,
          latA: store.latA,
        }
      })
    .then(res =>{
      // console.log(res.data)
      store.results = res.data.apartments
      store.isLoaded = true
      // console.log( store.results )
    })
  },
  testFunzione(position){
    console.log(position);
    console.log('ciao');
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
        
    },


    saveData() {
      store.inputSearch = "";
      let input = document.getElementById(this.input_id)
      let datalist = document.getElementById(this.list)
      let options = document.getElementsByClassName('options')
      let isChoose = false;

      for (const option of options) {
        // console.log(option.attributes.lat.value)
        if (option.value == input.value) {
          store.latA = option.attributes.lat.value;
          store.lonA = option.attributes.lon.value;
          isChoose = true
        }
        if (isChoose){
          store.inputSearch = input.value;
          this.getApiNostra();
        } 
      }
      console.log(input.value);
    }

  },
  mounted(){
    // this.checkInputValue(decodeURIComponent(this.$route.query.query));
    // console.log(decodeURIComponent(this.$route.query.query));
  },
  computed:{
    
  }
  }
  </script>


<template>
<div v-if="$route.name != 'home'" class="search-bar-container d-flex justify-content-center align-items-center input-group mx-auto ">
  <input
  type="text"
  class="form-control"
  placeholder="Dove vuoi cercare?"
  aria-label="Dove vuoi cercare?"
  aria-describedby="button-addon2"
  @keyup="checkTimer()"
  :id="input_id"
  v-model.trim="inputSearch"
  :list="input_list"
  >
  <datalist  :id="input_list">
    <option v-for="address in this.mappedResults" :position="address.position" :lat="address.position.lat" :lon="address.position.lon" class="options" :key="address.id" v-on:click="testFunzione(address.string)" :value="address.string">{{address.string}}</option>
  </datalist>
  
  <form>
    <router-link :to="{ name:'AdvanceSearch', query:{query: encodeURIComponent(this.inputSearch)} }" class="btn_custom" type="button" id="button-addon2" @click="saveData()">
      Cerca
    </router-link>
  </form>
</div>
</template>


<style lang="scss"  scoped>
@use '../../scss/partials/palette' as *;
.btn_custom{
text-decoration: none;
  padding: 6px;
 border-radius: 0px 8px 8px 0px;
  background-color: $background-button;
  color: $background-secondry-body;
  border: 1px solid $background-secondry-body;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
    &:hover{
      background-color: $background-button;
      color: $background-secondry-body;
      border: 1px solid $background-secondry-body;
  }
}

</style>