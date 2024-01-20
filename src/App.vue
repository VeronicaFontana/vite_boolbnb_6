<script>
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'


export default{
  name: "App",
  data(){
    return{

    }
  },
  components:{
    Header,
    Footer
  }
}

</script>

<template>
  <Header />
<RouterView />
<Footer/>
</template>

<style lang="scss" scoped>

</style>
