import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/apartments',
  addressApiUrl: 'https://api.tomtom.com/search/2/geocode/',
  apiKey: 'H9LpZxM6CXyvTcM6MQohPzIS3ZH9d3Ke',
  apartments: [],
  addresses: [],

})

// https://api.tomtom.com/search/2/Geocode/52.157831,5.223776.json?key={Your_API_Key}