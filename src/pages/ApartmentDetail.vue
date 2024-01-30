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
        <h2 class="px-3 pt-2">{{ apartmentSingle.title }}</h2>
        <p class="px-3 testo_secondario fs-6"><i class="fa-solid fa-location-dot text-danger"></i> <em >{{ apartmentSingle.address }}</em></p>
        <!-- BOX IMMAGINE -->
        <div class="box_img">
          <img v-if="apartmentSingle.image"
          :src="`http://127.0.0.1:8000/storage/${apartmentSingle.image}`"
          onerror="this.src='/Placeholder.png'" alt="">
        </div>

      </div>

    </div>
    <!-- BOX MESSAGGIO D'INVIO -->
    <div class="col-sm-4">
      <div class="box_user px-4 text-center">
        <h2>Informazioni sull'annuncio</h2>
        <ul class="list-unstyled">
          <li v-if="apartmentSingle.user.name || apartmentSingle.user.surname">
            <span><b>Nome del proprietario:</b></span><br>
            <span>{{ apartmentSingle.user.name ?? '' }} {{ apartmentSingle.user.surname ?? '' }}</span>
          </li>
          <li class="mt-3">
            <span><b>Indirizzo email:</b></span><br>
            <span>{{ apartmentSingle.user.email }}</span>
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
                <div class="button">
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
        <div class="row py-3 gap-3 w-100 justify-content-center align-items-center flex-column flex-sm-row align-items-sm-center">
          <!-- Qua ciclerò i servizi ovviamente per adesso lo tengo cosi per una questione visiva -->
          <div class="col rooms" :style="{ backgroundImage: `url('/public/rooms.jpg')`}">
            <div class="blur"> 
              <i class="fa-solid fa-person-shelter"></i>
              <p><strong>{{ apartmentSingle.rooms }}</strong></p>
              <h5>Stanze</h5>
            </div>
          </div>
          <div class="col beds" :style="{ backgroundImage: `url('/public/bedrooms.jpg')`}">
            <div class="blur">
              <i class="fa-solid fa-bed"></i>
              <p><strong>{{apartmentSingle.beds}}</strong></p>
              <h5>Camere</h5>
            </div>
          </div>
          <div class="col bathrooms" :style="{ backgroundImage: `url('/public/bathrooms.jpg')`}">
            <div class="blur">
              <i class="fa-solid fa-restroom"></i>
              <p><strong>{{apartmentSingle.bathrooms}}</strong></p>
              <h5>Bagni</h5>
            </div>
          </div>
          <div class="col square_meters" :style="{ backgroundImage: `url('/public/square_meters.jpg')`}">
            <div class="blur">
              <i class="fa-solid fa-ruler-combined"></i>
              <p><strong>{{apartmentSingle.square_meters}}m²</strong></p>
              <h5>Superficie</h5>
            </div>
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
        <div class="box_mappa mx-auto my-4">
          <div style="width: 100%; height: 100%; border-radius: 30px;" id="map"></div>
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
  max-width: 1200px;
  i{
    color:black;
    text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
  }
  .box_card{
    width:100%;
    border-radius: 25px;
    border: solid 1px gray;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 10px rgb(144, 144, 144);
    color:black;
    text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
      img{
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-height: 400px;
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
      }
      .testo_secondario{
        font-size: 0.9rem;
      }
    }
  .box_user{
    height: 100%;
    background-color: $background-primary-header;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color:black;
    text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
    border: solid 1px gray;
    box-shadow: 0 0 10px rgb(144, 144, 144);
    h2{
      letter-spacing: 0.5px;
    }
    @media (max-width: 576px){
      margin: 0;
    }
      .btn{
      background-color: $background-button;
      color: $background-secondry-body;
      border: 1px solid $background-secondry-body;
      align-self: center;
        &:hover{
          background-color: $background-button;
          color: $background-secondry-body;
          border: 1px solid $background-secondry-body;
        }
      }
      .button{
        display: contents;
      }
    }
  .box_rooms{
    height: 200px;
    margin: 0px 0;
    padding: 0 10px;
    border-radius: 25px;
    color:black;
    text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
    @media (max-width: 576px) {
      height: auto;
          }
    .row{
      .col{
        border-radius: 25px;
        padding: 0px;
        text-align: center;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
        i{
          font-size: 2rem;
        }
      }
      .rooms{
        background-size: 100%;
        background-position-y: -40px;
        }
      .beds{
        background-size: 100%;
        background-position-y: -75px;
        }
      .bathrooms{
        background-size: 100%;
        background-position-y: -125px;
        }
      .square_meters{
        background-size: 100%;
        background-position-y: 3px;
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
    color:black;
    text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
    i{
          font-size: 1.1rem;
          padding: 0 5px;
        }
  }


  .row{
    .col-12{
      padding: 0 !important;
      .box_mappa{
        border-radius: 30px;
        width: 100%;
        height: 600px;
        box-shadow: 0 0 10px rgb(144, 144, 144);
        @media (max-width: 576px) {
          width: 90%;
          height: 400px;
          }
      }
    }
  }
  .blur{
    // margin: 0px 70px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-size: 100%;
    backdrop-filter: blur(1.2px);
    padding: 20px 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
  }
}
</style>