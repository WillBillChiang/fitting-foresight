<template>
  <BuildingPage v-if="loggedIn"></BuildingPage>
  <LoginPage v-else></LoginPage>
</template>
<script>
import LoginPage from './login.vue';
import BuildingPage from './buildings.vue';
export default{
  data(){
    return{
      loggedIn: false
    }
  },
  components: {
    'LoginPage' : LoginPage,
    'BuildingPage' : BuildingPage

  }
}
</script>
