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
      timer:''
    }
  },
  components:{},
  methods:{

    checkTimer(){
      if(this.timer != ''){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(()=>{
        if(this.inputSearch.length > 5){
            this.checkInputValue();
        }
      },3000)
    },
  
    checkInputValue() {
        this.getAddress(this.inputSearch);
        this.getFFAddress()
    },

    getAddress(inputSearch) {
      axios.get(store.addressApiUrl + inputSearch + '.json', {
        params: {
          key: store.apiKey
        }
      })
      .then(res => {
        this.results = res.data.results;
        
        // console.log(res.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })

    },

    
    getFFAddress() {
      console.log(this.results)
      this.mappedResults = this.results.map((el) => {
        // console.log(el.address.freeformAddress);
        let element = el.address;
        let new_address = element.freeformAddress + ', ' + element.countrySubdivisionName;

        return new_address;
        
      })
    }
  },
  mounted(){},
  computed:{}
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
          <option v-for="address in this.mappedResults" :key="address" :value="address">{{address}}</option>
        </datalist>

      <router-link :to="{name: 'AdvanceSearch'}"><button class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button></router-link>
</template>


<style lang="scss"  scoped>

</style>