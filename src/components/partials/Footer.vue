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

      <div class="foot d-flex">
        <ul>
          <li>Ciao</li>
        </ul>
        
      </div>
      <div class="bottom-foot container d-flex">

        <div class="legal">
          <h3>Boolando s.r.l.</h3>
          <div>informazioni legali normativa sulla privacy Diritto di recessi</div>
          <ul></ul>
        </div>

        <div class="social">
          <h5>Trovaci anche su</h5>
          <a v-for="(item, index) in menuFontAweFooter" :key="index" :href="item.href">
            <i :class="item.font"></i>
          </a>
          
        </div>

      </div>
</footer>
</template>


<style lang="scss"  scoped>
footer{
  height: 300px;
  width: 100vw;
  background-color: rgb(48, 47, 47);
  color: white;
  .foot {
  height: 100px;
  width: 100%;
  background-color: rgb(24, 23, 23);
  margin-top: 60px;
  align-items: center;
      .bottom-foot {
        justify-content: space-between;
        color: white;
      }
  h3,h5 {
  padding: 15px 0px;
  }
  a {
  padding: 0px 4px;
  color: white;
  }
}
}


</style>