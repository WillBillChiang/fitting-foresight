<template>
  <Page class="container">
    <ListView class="list" for="room in rooms">
      <v-template>
        <Label
          :class="{buildings0: room.complete, buildings1: room.issue, buildings2: room.unchecked}"
          :text="room.name"
          @tap="onBuildingTap(room.name)"
        />
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import RoomPage from "./room.vue";

var firebase = require("nativescript-plugin-firebase");

export default {
  data() {
    return {
      rooms: []
    };
  },
  methods: {
    onBuildingTap: function() {
      console.log(this.currentBuilding);
    },
    onBuildingTap: function(b) {
      console.log(b);
      var path = this.currentBuilding + "/" + b;
      console.log(path);
      this.$navigateTo(RoomPage, {
        props: {
          room: path
        }
      });
    }
  },
  mounted: function() {
    var onQueryEvent = result => {
      // note that the query returns 1 match at a time
      // in the order specified in the query
      if (!result.error) {
        console.log(result);
        var temp = {
          name: "",
          complete: false,
          issue: false,
          unchecked: false
        };
        temp.name = result.key;
        if (result.value.Status == "Complete") {
          temp.complete = true;
        } else if (result.value.Status == "Unchecked") {
          temp.unchecked = true;
        } else {
          temp.issue = true;
        }
        this.rooms.push(temp);
        console.log("Event type: " + result.type);
        console.log("Key: " + result.key);
        console.log("Value: " + JSON.stringify(result.value)); // a JSON object
        console.log("Children: " + JSON.stringify(result.children)); // an array, added in plugin v 8.0.0
        console.log("Buildings: " + this.buildings);
      }
    };

    firebase.query(onQueryEvent, "/buildings/" + this.currentBuilding, {
      orderBy: {
        type: firebase.QueryOrderByType.CHILD,
        value: "since" // mandatory when type is 'child'
      }
    });
  },
  props: ["currentBuilding"]
};
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
.buildings0 {
  font-size: 40px;
  color: green;
}
.buildings1 {
  font-size: 40px;
  color: orange;
}
.buildings2 {
  font-size: 40px;
  color: red;
}
</style>
