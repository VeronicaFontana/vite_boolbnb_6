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

      <div class="col-12 col-md-6 col-lg-4 mb-4 p-2">
        <div class="card card-has-bg click-col" :style="{ backgroundImage: `url('http://127.0.0.1:8000/storage/${result.image}')`}">        
          <div class="card-img-overlay d-flex flex-column">
            <div class="card-body">
              <small class="card-meta mb-2 fw-bold">{{result.address}}</small>
              <h4 class="card-title mt-2 ">{{result.title}}</h4>
              <h3 class="distance"><i class="fa-solid fa-location-dot text-danger"></i> {{ formattedDistance(result.distance) }} km</h3>
            </div>
            <div class="card-footer">
              <div class="media">
                <div class="media-body text-center fw-bold fs-5">
                  <div class="d-flex">
                    <small class="m-1 col"><i class="fa-solid fa-person-shelter"></i> Stanze {{ result.rooms }} </small>
                    <small class="m-1 col"><i class="fa-solid fa-bed"></i> Posti letto {{ result.beds }} </small>
                  </div>
                  <div class="d-flex">
                    <small class="m-1 col"><i class="fa-solid fa-restroom"></i> Bagni {{ result.bathrooms }} </small>
                    <small class="m-1 col"><i class="fa-solid fa-ruler-combined"></i> Superficie {{ result.square_meters }}m²</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>


<style lang="scss" scoped>

@use '../../scss/partials/palette' as *;

//post card styles

.card{
  border: none;
  transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow:hidden;
  border-radius:30px;
  min-height:450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
  h4{
    color: $background-button;
    
  }

  @media (max-width: 768px) {
    min-height:350px;
  }

  @media (max-width: 420px) {
    min-height:300px;
  }

  &.card-has-bg{
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    // -webkit-filter: grayscale(1);
    // -moz-filter: grayscale(100%);
    // -ms-filter: grayscale(100%);
    // -o-filter: grayscale(100%);
    // filter: grayscale(30%);
    }

    &:hover {
    transform: scale(0.98);
    box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
    // background-size:130%;
    background-size:210%;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    .card-footer .media-body small, h4{
      color:white;
    }  
    

    .card-img-overlay {
      transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
      background: rgb(2, 1, 0);
      background: linear-gradient(0deg, rgba(123, 152, 104, 0.541) 0%, rgba(179, 177, 175, 0) 100%);
      }
    }
}
  .card-footer{
    // background: none;
    // border-top: none;
    .media-body{
      // border: $background-dark;
      // font-size: 1rem;
      // color: $background-primary-header;
      // background: rgba(255, 255, 255, 0.18);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      
      small{
        color:$background-button;
      }
    }
  }
  .card-title{
    font-weight:800
  }
  .card-meta{
    color:rgba(0, 0, 0, 0.654);
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:2px;
  }
  .card-body{ 
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    .distance{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

  &:hover {
    .card-body{
      margin-top:30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
      
    }
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    background: rgb(18, 15, 168);
    background: linear-gradient(0deg, rgba(123, 190, 92, 0) 0%, rgba(118, 195, 231, 0) 100%);
    }

}

@media (max-width: 767px){
  
}
</style>
