<script>
  import axios from 'axios'; 
  import {store} from '../../data/store.js'

  export default {
  name:'Jumbotron',
  data(){
    return{
      inputSearch: '',
      results: [],
      mappedResults: []
    }
  },
  components:{},
  methods:{

    startSearch() {
      if (inputSearch.length > 5) {
        this.checkInputValue();
      }
    },

    checkInputValue() {
      
      setTimeout(() => {
        
        this.getAddress(this.inputSearch);
        this.getFFAddress()
      }, 2000)
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
  <div class="img-box d-flex justify-content-center align-items-center">
    <div class="input-group mb-3 w-50">
      <input
        type="text"
        class="form-control"
        placeholder="Dove vuoi cercare?"
        aria-label="Dove vuoi cercare?"
        aria-describedby="button-addon2"
        @input="checkInputValue()"
        id="input-search"
        v-model="inputSearch"
        list="address-search-results"
        >
        <datalist id="address-search-results">
          <option v-for="address in this.mappedResults" :key="address" :value="address">{{address}}</option>
        </datalist>

      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
    </div>
  </div>
</template>


<style lang="scss"  scoped>

.img-box{
  width: 100%;
  height: 600px;
  background-image: url("/public/532101_beautiful-house-hd-wallpapers_1920x1200_h.jpg");
  background-position: center center;

  img{
    width: 100%;
    height: 100%;
  }
}

</style>