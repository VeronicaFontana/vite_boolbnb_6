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
  


  <div class="col-sm-12 col-md-6 col-lg-4 mb-4 p-2">
  
  <div class="card card-has-bg click-col" 
        v-if="result.image"
        :src="`http://127.0.0.1:8000/storage/${result.image}`"
        onerror="this.src='/Placeholder.png'">

        <div class="card-img-overlay d-flex flex-column">

            <div class="card-body">
              <small class="card-meta mb-2">{{ result.address }}</small>
              <h4 class="card-title mt-2 ">{{ result.title }}</h4>
            
            </div>

            <div class="card-footer">
              <div class="media">
                <div class="media-body">
                    <div class="d-flex">
                      <small class="m-1 col"><i class="fa-solid fa-person-shelter"></i> Stanze {{ result.rooms }} </small>
                      <small class="m-1 col"><i class="fa-solid fa-bed"></i> Posi Letto {{ result.beds }} </small>
                    </div>
                    <div class="d-flex">
                      <small class="m-1 col"><i class="fa-solid fa-restroom"></i> Bagni {{ result.bathrooms }} </small>
                      <small class="m-1 col"><i class="fa-solid fa-ruler-combined"></i> Metri quadri {{ result.square_meters }}m²</small>
                    </div>
                  
                </div>
              </div>
            </div>

        </div>

      </div>

    </div>

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

.location-pointer {
  color: #c81212;
}
</style>
