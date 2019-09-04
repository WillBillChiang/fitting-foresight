<template>
  <Page class="container">
    <ListView class="list" for="room in rooms" >
      <v-template>
        <Label class="buildings" :text="room.name" @tap="onBuildingTap(room)"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
export default {
  data () {
      return {
        rooms: [
          {building: '800s', name: '801'},
          {building: '800s', name: '802'},
          {building: '400s', name: '401'},
          {building: '400s', name: '402'},
          {building: 'Admin', name: '101'},
          {building: 'Admin', name: '102'},
        ],
      }
  },
  methods: {
    onBuildingTap: function(r){
      console.log(r)
    }
  },
  props: ['currentBuilding']
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
