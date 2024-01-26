<script>
  export default {
  name:'Footer',
  data(){
    return{}
  },
  components:{},
  methods:{},
  mounted(){},
  computed:{}
  }
  </script>


<template>
<footer>
  <div class="container">
    <div class="row flex-column align-content-center flex-sm-row">

      <div class="col-sm-3 d-sm-flex flex-sm-row col-fluid  one">
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-brands fa-cc-mastercard"></i>
        <i class="fa-brands fa-paypal"></i>
        <i class="fa-brands fa-cc-apple-pay"></i>
        <i class="fa-solid fa-lock"></i>
      </div>
      <div class="col-fluid col-sm-9 d-sm-flex flex-sm-row two">
        <p>BoolB&B.it rispetta lo standard PCI-DSS per i servizi di Prenotazione Alberghiera / Accomodation Reservation - Payment Card Industry Data Security Standard v.3.2, Service Provider Level 2</p>
      </div>
    </div>

    <div class="row row flex-column align-content-center flex-sm-row">
      <div class="col-fluid col-sm-9 d-sm-flex flex-sm-row two">
        <p>L'accesso o l'utilizzo di questo sito è subordinato all'accettazione dei Termini   del servizio, Informativa sulla Privacy e Cookie Policy
          Realizzazione:  Classe #105 Team-6 - P.Iva 6516516516
        </p>
      </div>
      <div class="col-sm-3 d-sm-flex flex-sm-row col-fluid one">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  </div> 
  
</footer>
</template>


<style lang="scss"  scoped>
footer{
  background-color: rgb(48, 47, 47);
  color: white;
  .row{
    padding: 25px 0 25px 0;
    display: flex;
    justify-items: center;
    border-bottom: 1px solid gray;
    .one{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    i{
      font-size: 2.1rem;
    }
    }
    .two{
      text-align: center;
      padding: 10px;
    }
  }
}

</style>