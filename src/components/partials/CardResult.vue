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
        
        <router-link :to="`/apartment/${result.slug}`" class="card card-has-bg click-col" :style="{ backgroundImage: `url('http://127.0.0.1:8000/storage/${result.image}')`}">        
          <div class="card-img-overlay d-flex flex-column">
            <div class="card-body">
              <div class="blur">
                <small class="card-meta mb-2 fw-bold"><i class="fa-solid fa-map-location-dot"></i>{{result.address}}</small>
                <h4 class="card-title mt-2 "><i class="fa-solid fa-house-user"></i>{{result.title}}</h4>
                <h3 class="distance"><i class="fa-solid fa-location-dot text-danger"></i> {{ formattedDistance(result.distance) }} km</h3>
              </div>
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
        </router-link>
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
    // color: black;
    color: $background-primary-header; 
    text-shadow: 1px 1px rgba(0, 0, 0, 0.87);
    i{
      padding: 0px 5px;
      color:black;
      text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
    }
  }
  h3{
    color: $background-primary-header; 
    text-shadow: 1px 1px rgba(0, 0, 0, 0.87);
    i{
      padding: 0px 5px;
      color:black;
      text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
    }
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
    .card-footer .media-body small{
      color: $background-primary-header; 
      text-shadow: 1px 1px rgba(0, 0, 0, 0.87);
    }  
    

    .card-img-overlay {
      transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
      background: rgb(2, 1, 0);
      background: linear-gradient(0deg, rgba(211, 166, 126, 0.26) 0%, rgba(37, 37, 36, 0.404) 100%);
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
      padding: 5px 10px;
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.301);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(3px);
      border: 1px solid rgba(206, 206, 191, 0.67);
      
      small{
        color: $background-primary-header; 
        text-shadow: 1px 1px rgba(0, 0, 0, 0.87);
        i{
          color:black;
          text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
        }
      }
    }
  }
  .card-title{
    font-weight:800
  }
  .card-meta{
    color:black;
    text-shadow: 1px 1px rgba(197, 191, 191, 0.87);
    text-transform:uppercase;
    font-weight:700;
    letter-spacing:1.7px;
  }
  .card-body{ 
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    .distance{
        position: absolute;
        bottom: 8px;
        right:0;
        transform: translateX(-50%);
        i{
          color: rgb(236, 65, 13);
        }
      }
      .blur{
      padding: 10px;
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      
      i{
        padding: 0px 5px;
        font-size: 1.3rem;
      }
      }
    }

  &:hover {
    .card-body{
      margin-top:30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
      h4{
        color: $background-secondry-body; 
        text-shadow: 1px 1px rgba(0, 0, 0, 0.87);
      }
    }
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    background: rgb(18, 15, 168);
    background: linear-gradient(0deg, rgba(40, 41, 40, 0) 0%, rgba(82, 82, 82, 0.308) 100%);
  }
}

</style>
