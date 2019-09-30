<template>
  <Page class="container">
    <ListView class="list" for="building in buildings">
      <v-template>
        <Label class="buildings" :text="building" @tap="onBuildingTap(building)"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
var firebase = require("nativescript-plugin-firebase");

import RoomsPage from './rooms.vue';
export default {
    data () {
        return {
          buildings: [],
        }
    },
    methods: {
      onBuildingTap: function(b){
        console.log(b)
        this.$navigateTo(RoomsPage, {
          props: {
            currentBuilding: b
          }
        })
      },
    },
    mounted: function(){

      var onQueryEvent = (result) => {
        // note that the query returns 1 match at a time
        // in the order specified in the query
        if (!result.error) {
            this.buildings.push(result.key);
            console.log("Event type: " + result.type);
            console.log("Key: " + result.key);
            console.log("Value: " + JSON.stringify(result.value)); // a JSON object
            console.log("Children: " + JSON.stringify(result.children)); // an array, added in plugin v 8.0.0
            console.log('Buildings: ' + this.buildings)
            this.buildings.forEach(function(item){
              console.log(item);
            })
        }
      };

    firebase.query(
        onQueryEvent,
        "/buildings",
        {
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since' // mandatory when type is 'child'
            },
        }
    );


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
