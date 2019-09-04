<template>
  <Page class="container">
    <StackLayout>
      <Button @tap="isLogged" text="Log In"/>
    </StackLayout >
  </Page>
</template>
<script>
import BuildingPage from './buildings.vue';
import RoomPage from './rooms.vue';

export default {
    data () {
        return {
        }
    },
    methods: {
      isLogged: function(){
        this.$navigateTo(BuildingPage)
      }
    }
}
</script>

<style scoped>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}

</style>
