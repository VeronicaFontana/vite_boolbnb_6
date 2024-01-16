<script>
import Header from './components/partials/Header.vue'


export default{
  name: "App",
  data(){
    return{

    }
  },
  components:{
    Header
  }
}

</script>

<template>
  <Header />
<RouterView />
</template>

<style lang="scss" scoped>

</style>
