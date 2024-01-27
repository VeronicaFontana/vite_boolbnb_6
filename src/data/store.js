import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/apartments',
  apiUrlSendMessage: 'http://127.0.0.1:8000/api/',
  addressApiUrl: 'https://api.tomtom.com/search/2/geocode/',
  apiKey: 'H9LpZxM6CXyvTcM6MQohPzIS3ZH9d3Ke',
  apiNostra:'http://127.0.0.1:8000/api/search/',
  apiSingleAparment:'http://127.0.0.1:8000/api/singleApartment/',
  apartmentSingle:[],
  apartments: [],
  addresses: [],
  sponsoredApartments: [],
  results: [],
  lonA: '',
  latA: '',
  apiServices: "http://127.0.0.1:8000/api/services",
  services: [],
  selectedValues: {
    rooms: 0,
    beds: 0,
    services: []
  },
  apiFilter: "http://127.0.0.1:8000/filtered-apartments",
  filteredApartments: [] ,
  inputSearch: "",
  apiTest:'http://127.0.0.1:8000/api/test-api/',
  isLoaded: false,
  servicesApartments: [],
})
  
// https://api.tomtom.com/search/2/Geocode/52.157831,5.223776.json?key={Your_API_Key}