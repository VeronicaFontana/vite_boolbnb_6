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
  <div class="box_detailapartment">
    <!-- Credo che ci vadano le info dell'appartamento -->
    <!-- Box che contiene tutto -->
<div class="row">
    <!--  -->
  <div class="col-10 offset-1 border-2">

    <div class="row">

      <div class="col-8">

      <!-- Template -->
        <div class="box_card" v-for="apartmentSingle in store.apartmentSingle.apartment" :key="apartmentSingle">
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

              <div class="box_service">
                <!-- sara la riga dei servizi -->
                <div class="row p-3">
                  <!-- Qua ciclerò i servizi ovviamente per adesso lo tengo cosi per una questione visiva -->
                  <div class="col">
                    <h5>il nome del servizio</h5>
                    <i class="fa-solid fa-square-parking"></i>
                    <p>ci andranno le descrizione</p>
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
        height: 500px;
        margin: 20px;
        padding: 0px 5px;
        border-radius: 25px;
        background-color: lightgrey;
        .testo_secondario{
          font-size: 0.9rem;
        }
        .box_img{
          width: 300px;
          height: 200px;
          img{
            width: 100%;
          height: 100%;
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
  .box_service{
    height: 200px;
    margin: 20px;
    border-radius: 25px;
    background-color: lightgrey;
    .row{
      .col{
        border: solid 1px black;
      }

    }
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