<script>
  export default {
    name:'CardResult',
    props: {
      result: Object
    },
    data(){
      return{}
    },
    components:{
    },
    methods:{
      isInStorage(imagePath) {
      // Verifica se l'immagine è nella directory storage/
      // Puoi personalizzare questa logica a seconda delle tue esigenze
      return imagePath.startsWith('storage/');
    },
    formattedDistance(number){
      return (Math.round(number/100)/10);
    }
  },
  mounted(){},
    computed:{
      
    }
  }
  </script>


<template>
<section class="results-box">
  <div class="card mb-3 " style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img
            v-if="result.appartamento.image"
            :src="`http://127.0.0.1:8000/storage/${result.appartamento.image}`"
            onerror="this.src='/Placeholder.png'"
            class="img-fluid rounded-start"
            alt="..."
          />
          <!-- <img v-if="(result.appartamento.image)" :src="`http://127.0.0.1:8000/storage/`+result.appartamento.image" class="img-fluid rounded-start" alt="..."> -->

      
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ result.appartamento.title }}</h5>
          <div class="row w-75 h-50" id="card-services">
            <div class="col-3">
              <span><i class="fa-solid fa-person-shelter"></i> {{ result.appartamento.rooms }}</span><br>
              <span>locali</span>
            </div>
            <div class="col-4">
              <span><i class="fa-solid fa-ruler-combined"></i> {{ result.appartamento.square_meters }}m²</span><br>
              <span>superficie</span>
            </div>
            <div class="col-3">
              <span><i class="fa-solid fa-restroom"></i> {{ result.appartamento.bathrooms }}</span><br>
              <span>bagni</span>
            </div>
          </div>
          <p class="card-text">Descrizione</p>
          <p class="card-text">Questo appartamento dista: {{ formattedDistance(result.distanza) }} chilometri</p>
        </div>
      </div>
    </div>
  </div>
</section>

</template>


<style lang="scss" scoped>
.results-box{
  margin: 20px;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  #card-services{
    padding: 0px 0px 9px 12px;
    .col-3, .col-4{
      padding: 0;
      font-size: .8rem;
      color: grey;
    }
  }
}
</style>
