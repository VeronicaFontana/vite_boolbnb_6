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
      },1500)

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
        // this.results = res.data.results; // <----- questo funziona
        this.results = res.data;
        console.log('TEST TIPOLOGIA RISULTATO -------', res.data)
        // console.log(res.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })

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
          id: el.id
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
          <option v-for="address in this.mappedResults" :key="address.id" :value="address">{{address.string}}</option>
        </datalist>

      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
</template>


<style lang="scss"  scoped>

</style>