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
<footer class="">
  <div class="container">
    <div class="row">
      <div class="col-3 one">
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-brands fa-cc-mastercard"></i>
        <i class="fa-brands fa-paypal"></i>
        <i class="fa-brands fa-cc-apple-pay"></i>
        <i class="fa-solid fa-lock"></i>
      </div>
      <div class="col-9 two">
        <p>BoolB&B.it rispetta lo standard PCI-DSS per i servizi di Prenotazione Alberghiera / Accomodation Reservation - Payment Card Industry Data Security Standard v.3.2, Service Provider Level 2</p>
      </div>
    </div>
    <div class="row">
      <div class="col-9 two">
        <p>L'accesso o l'utilizzo di questo sito è subordinato all'accettazione dei Termini   del servizio, Informativa sulla Privacy e Cookie Policy
          Realizzazione:  Classe #105 Team-6 - P.Iva 6516516516
        </p>
      </div>
      <div class="col-3 one">
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
  height: 250px;
  width: 100vw;
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
      justify-content: center;
      justify-content: space-around;
    // background-color: rgb(172, 70, 70);
    i{
      font-size: 1.9rem;
    }
    }
    .two{
    // background-color: rgb(156, 98, 22);
    padding-top:10px;
    }
  }
}


</style>