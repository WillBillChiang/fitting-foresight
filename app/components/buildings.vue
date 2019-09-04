<template>
  <Page class="container">
    <ListView class="list" v-for="building in buildings">
      <v-template>
        <Label class="buildings" :text="building.name" @tap="onBuildingTap(building.name)"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import RoomPage from './rooms.vue';
export default {
    data () {
        return {
          buildings: [
            { name: '800s' },
            { name: '400s' },
            { name: 'Admin' }
          ],
        }
    },
    methods: {
      onBuildingTap: function(b){
        this.$navigateTo(RoomPage, {
          props: {
            currentBuilding: b
          }
        })
        console.log("D:")
      },
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
.list {
  font-size: 50px;
}
.buildings {
  font-size: 40px;
}

</style>
