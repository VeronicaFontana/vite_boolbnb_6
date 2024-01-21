<script>
import axios from 'axios';
import {store} from '../data/store';

  export default {
  name:'ApartmentDetail',
  data(){
    return{
      store
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
    }
  },
  mounted(){
    this.getSingleApartment(this.$route.params.slug)
  },
  computed:{}
  }
  </script>


<template>
  <div class="box_detailapartment" v-for="apartmentSingle in store.apartmentSingle.apartment" :key="apartmentSingle">
    <!-- Credo che ci vadano le info dell'appartamento -->
    <!-- Box che contiene tutto -->
<div class="row">
    <!--  -->
  <div class="col-10 offset-1 border-2">

    <div class="row">

      <div class="col-8">

      <!-- Template -->
        <div class="box_card">
          <!-- cicliamo il titolo per un singolo appartamento -->
          <h2 class="p-2">{{ apartmentSingle.title }}</h2>
          <p class="px-2 testo_secondario"><strong>Indirizzo</strong><em>: {{ apartmentSingle.address }}</em></p>
          <div class="box_img">
            <img v-if="apartmentSingle.image"
            :src="`http://127.0.0.1:8000/storage/${apartmentSingle.image}`"
            onerror="this.src='/Placeholder.png'" alt="">
          </div>

        </div>
      </div>

    <div class="col-4">
      <div class="box_user">
        <p>sas</p>
      </div>
    </div>
    </div>
  </div>
</div>
    <!-- Secondo box che conterranno non mi ricordo che cosa -->
      <div class="row">
        <div class="col-10 offset-1 border-2">
            <div class="row">
              <div class="col-8">

              <div class="box_rooms d-flex justify-content-center">
                <!-- sara la riga dei servizi -->
                <div class="row w-100 align-items-center">
                  <!-- Qua ciclerò i servizi ovviamente per adesso lo tengo cosi per una questione visiva -->
                  <div class="col">
                    <i class="fa-solid fa-person-shelter"></i>
                    <p><strong>{{ apartmentSingle.rooms }}</strong></p>
                    <h5>Stanze</h5>
                  </div>
                  <div class="col mx-1">
                    <i class="fa-solid fa-bed"></i>
                    <p><strong>{{apartmentSingle.beds}}</strong></p>
                    <h5>Camere</h5>
                  </div>
                  <div class="col me-1">
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
            </div>
        </div>
      </div>

      <!-- Qua ci andranno i servizi -->
      <div class="row">
        <div class="col-10 offset-1 border-2">
            <div class="row">
              <div class="col-8">

              <div class="box_service d-flex justify-content-center">
                <!-- sara la riga dei servizi -->
                <div class="row w-100">
                  <div class="col-2 d-flex align-items-center">
                    <h3>Servizi :</h3>
                  </div>
                  <div class="col-10">
                    <ul>
                      <li class="list-unstyled" v-for="service in apartmentSingle.services" :key="service"><i :class="service.icon"></i>{{ service.name }}</li>
                    </ul>
                  </div>
                  

                </div>
              </div>
              </div>
            </div>
        </div>
      </div>

      <!-- Terzo box dve andrà messa la mappa con il point  -->
      <div class="row">
        <div class="col-10 offset-1 border-2">
          <div class="box_mappa">
            jdncjnew
          </div>

        </div>
      </div>

</div>
</template>

<style lang="scss" scoped>
.box_detailapartment{
  margin-top: 90px;
  .col-10{
    // border: solid 1px black;
    // background-color: brown;
    .row{
      .col-8{
      // background-color: darkcyan;
      border: solid 1px rgb(182, 26, 26);
      .box_card{
        height: 100%;
        padding: 10px 5px;
        border-radius: 25px;
        border: solid 1px gray;
        .testo_secondario{
          font-size: 0.9rem;
        }
        .box_img{
          width: 100%;
          height: 400px;
          border-radius: 20px;
          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      }
      .col-4{
        // background-color: darkorange;
      border: solid 1px rgb(15, 202, 56);
        .box_user{
          height: 500px;
          background-color: gray;
          border-radius: 25px;
          margin:20px;
        }
      }
    }
  }
  .box_rooms{
    height: 200px;
    margin: 20px 0;
    border-radius: 25px;
    border: solid 1px gray;
    background-color: lightgrey;
    .row{
      .col{
        border: solid 1px black;
        border-radius: 25px;
        text-align: center;
        padding: 20px 0;
        i{
          font-size: 2rem;
        }
      }

    }
  }

  .box_service{
    height: 300px;
    margin: 20px 0;
    border-radius: 25px;
    border: solid 1px gray;
    background-color: lightgrey;
  }
  .row{
    .col-10{
      .box_mappa{
        height: 300px;
        background-color: olive;
      }
    }
  }
}
</style>