<script>
import axios from 'axios';
import {store} from '../data/store';

  export default {
  name:'ApartmentDetail',
  data(){
    return{
      store,
      success:false,
      full_name:'',
      email:'',
      message:'',
      date:'',
      errors:{
        full_name:[],
        email:[],
        message:[],
      },
      map: ''
    }
  },
  components:{
  },
  methods:{
    getSingleApartment(slug){
      axios.get(store.apiSingleAparment + slug)
      .then(res=>{
        store.apartmentSingle = res.data;
        console.log(res.data);
      })
      .catch(error => {
        console.error('Errore nella chiamata API:', error);
      });
    },
    formatDate(){
      let newDate = new Date();
      let year =  newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let formattedMonth = month.toLocaleString('it-IT', {
          minimumIntegerDigits: 2,
          useGrouping: false
      })
      let day = newDate.getDate();
      let formattedDay = day.toLocaleString('it-IT', {
          minimumIntegerDigits: 2,
          useGrouping: false
      })

      this.dateString = year + '-' + formattedMonth + '-' + formattedDay;
    },
    sendMessageUser(){
      const data = {
        full_name: this.full_name,
        email: this.email,
        message: this.message,
        date: this.dateString,
      }
      axios.post(store.apiUrlSendMessage + 'send-message', data)
      .then(res=>{
        console.log(store.apiUrlSendMessage +'send-message', data);
        console.log(res.data);
        this.success = res.data.success;
        if(!this.success){
          this.errors = res.data.errors;
        console.log(this.errors);
        }else{
            // Resetta i campi del form
            console.log('Reset dei campi del form');
            this.full_name = '';
            this.email = '';
            this.message = '';
            this.errors = {};
          }
      })
    },


    getMap() {
      setTimeout(() => {
        console.log(store.apartmentSingle.apartment[0].lat)
        let mapElement = document.createElement('div');
        // mapElement.innerHTML = 'alfonso'
        // document.getElementById('box_mappa').appendChild(mapElement)
        
        let lat = store.apartmentSingle.apartment[0].lat;
        let lng = store.apartmentSingle.apartment[0].lng
        
        
        

        let center = { lat: lat, lng: lng }
        mapElement = tt.map({
          key: "K3k0yOkyU7WALeqebCABeIkAJp9nGGmo",
          container: "map",
          center: center,
          zoom: 15
        })
        mapElement.on("load",() =>{
          new tt.Marker().setLngLat(center).addTo(mapElement)
          new tt.Marker().setLngLat({lat: lat, lng: lng}).addTo(mapElement)
        })
      }, 1000)

    },
  },
  mounted(){
    this.getSingleApartment(this.$route.params.slug);
    this.formatDate();
    this.getMap();
  },
  computed:{}
  }
  </script>


<template>

<div class="box_detailapartment" id="top" v-for="apartmentSingle in store.apartmentSingle.apartment" :key="apartmentSingle">

  <div class="row">

    <div class="col-sm-8">

      <div class="box_card">
        <!--TITOLO APPARTAMENTO  -->
        <h2 class="p-2">{{ apartmentSingle.title }}</h2>
        <p class="px-2 testo_secondario"><strong>Indirizzo</strong><em>: {{ apartmentSingle.address }}</em></p>
        <!-- BOX IMMAGINE -->
        <div class="box_img">
          <img v-if="apartmentSingle.image"
          :src="`http://127.0.0.1:8000/storage/${apartmentSingle.image}`"
          onerror="this.src='/Placeholder.png'" alt="">
        </div>

      </div>

    </div>

    <div class="col-sm-4">
      <div class="box_user p-4 text-center">
        <h3>Informazioni sull'annuncio</h3>
        <ul class="list-unstyled">
          <li v-if="apartmentSingle.user.name || apartmentSingle.user.surname">
            <p>Nome del proprietario: {{ apartmentSingle.user.name ?? '' }} {{ apartmentSingle.user.surname ?? '' }}</p>
          </li>
          <li>
            <p>Indirizzo email: {{ apartmentSingle.user.email }}</p>
          </li>
          <li>
            <p>Appartamento inserito il {{ apartmentSingle.created_at ?? '' }}</p>
          </li>
        </ul>
        <!-- Qua ci andra l'offcanvas dell'invio del messaggio  -->
        <!-- Il form si apre qua del messaggio -->
        <form @submit.prevent="sendMessageUser()">
          <!-- ------------------------ -->
          <div v-if="!success" class="offcanvas offcanvas-end pt-4 pt-sm-0" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Invia il messaggio al proprietario</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <!-- NOME E COGNOME -->
                <div class="mb-3">
                  <label for="full_name" class="form-label">Inserisci il tuo nome e cognome</label>
                  <input v-model="full_name" name="full_name" type="text" class="form-control" id="full_name" placeholder="Mario Rossi">
                  <p class="error" v-for="error in errors.full_name" :key="error.id">{{ error }}</p>
                </div>
              <!-- EMAIL -->
                <div class="mb-3">
                  <label for="email" class="form-label">Inserisci la tua Email@ *</label>
                  <input v-model="email" name="email" type="email" class="form-control" id="email" placeholder="name@example.com">
                  <p class="error" v-for="error in errors.email" :key="error.id">{{ error }}</p>
                </div>
              <!-- MESSAGGIO -->
                <div class="mb-3">
                  <label for="message" class="form-label">Invia il tuo messaggio *</label>
                  <textarea v-model="message" name="message" class="form-control" id="message" rows="5"></textarea>
                  <p class="error" v-for="error in errors.message" :key="error.id">{{ error }}</p>
                </div>
                <!-- BOTTONE DELL'INVIO FORM MESSAGE -->
                <div>
                  <button class="btn btn-light my-3" type="submit">Invia</button>
                </div>
            </div>
          </div>
          
          <!-- ------------------------- -->
          <div v-else>Email inviata correttamente</div>
        </form>
        
        <!-- Il form si chiude qui -->

        <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Chiedi informazioni</button>
      </div>
    </div>

    <!-- DETTAGLI APPARTAMENTO -->
    <div class="col-12">
      <div class="box_rooms d-flex justify-content-center align-items-baseline align-items-sm-center d-sm-flex justify-content-sm-center">
        <!--CAMERE E DATTAGLI DELL'APPARTAMENTO -->
        <div class="row w-100 justify-content-center align-items-center flex-column flex-sm-row align-items-sm-center">
          <!-- Qua ciclerò i servizi ovviamente per adesso lo tengo cosi per una questione visiva -->
          <div class="col">
            <i class="fa-solid fa-person-shelter"></i>
            <p><strong>{{ apartmentSingle.rooms }}</strong></p>
            <h5>Stanze</h5>
          </div>
          <div class="col mx-sm-1">
            <i class="fa-solid fa-bed"></i>
            <p><strong>{{apartmentSingle.beds}}</strong></p>
            <h5>Camere</h5>
          </div>
          <div class="col me-sm-1">
            <i class="fa-solid fa-restroom"></i>
            <p><strong>{{apartmentSingle.bathrooms}}</strong></p>
            <h5>Bagni</h5>
          </div>
          <div class="col">
            <i class="fa-solid fa-ruler-combined"></i>
            <p><strong>{{apartmentSingle.square_meters}}m²</strong></p>
            <h5>Superficie</h5>
          </div>

        </div>
      </div>
    </div>

    <!-- SERVIZI -->
    <div class="col-12">
      <div class="box_service d-flex justify-content-center">
        <!-- sara la riga dei servizi -->
        <div class="row">
          <div class="col-3 d-flex align-items-center">
            <h3>Servizi:</h3>
          </div>
          <div class="col-9 d-flex align-items-center p-0">
            <ul class="d-flex flex-wrap m-0">
              <li class="list-unstyled px-3" v-for="service in apartmentSingle.services" :key="service"><i :class="service.icon"></i> {{ service.name }}</li>
            </ul>
          </div>
          

        </div>
      </div>
    </div>

    <!-- MAPPA -->
    <div class="col-12">
        <div class="box_mappa mx-auto my-2">
          <div style="width: 100%; height: 100%;" id="map"></div>
        </div>
    </div>

  </div>

</div>

</template>

<style lang="scss" scoped>
@use '../scss/partials/palette' as *;
.box_detailapartment{
  // margin-top: 110px;
  width: 95%;
  margin: 110px auto 0 auto;
  max-width: 950px;
  .box_card{
        width:100%;
        padding: 10px 5px;
        border-radius: 25px;
        border: solid 1px gray;
        overflow: hidden;
          img{
          max-height: 400px;
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
        .testo_secondario{
          font-size: 0.9rem;
        }
      }
  .col-10{
    // border: solid 1px black;
    // background-color: brown;
    .row{
      .col-8{
      // background-color: darkcyan;
      

      }
      .col-12{
        // background-color: darkorange;
        .box_user{
          height: fit;
          background-color: gray;
          border-radius: 25px;
          margin:20px 0px;
          @media (max-width: 576px) {
            margin: 0;
          }
        }
      }
    }
  }
  .box_rooms{
    height: 200px;
    margin: 20px 0;
    padding: 0 10px;
    border-radius: 25px;
    border: solid 1px grey;
    @media (max-width: 576px) {
      height: auto;
          }
    .row{
      .col{
        border: solid 1px black;
        border-radius: 25px;
        text-align: center;
        padding: 20px 0;
        background-color: lightgrey;
        i{
          font-size: 2rem;
        }
      }

    }
  }

  .box_service{
    margin-bottom: 20px;
    min-height: 100px;
    border-radius: 25px;
    border: solid 1px gray;
    background-color: lightgrey;
    width: 93%;
    margin: 0 auto;
  }


  .row{
    .col-12{
      padding: 0 !important;
      .box_mappa{
        width: 100%;
        height: 600px;
        background-color: black;
        @media (max-width: 576px) {
          width: 90%;
          height: 400px;
          }
      }
    }
  }
}
</style>