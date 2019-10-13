<template>
  <Page>
    <StackLayout class="form">
      <StackLayout class="input-field">
        <TextField v-model="message" hint="Enter Status" />
      </StackLayout>
      <Button text="Submit" class="button" @tap="onTap()"></Button>
    </StackLayout>
  </Page>
</template>

<script>
import HomePage from "./buildings.vue";
var firebase = require("nativescript-plugin-firebase");
export default {
  data() {
    return {
      info: [],
      message: ""
    };
  },
  methods: {
    onTap: function() {
      // note that the query returns 1 match at a time
      // in the order specified in the query
      var computers = 0;
      var status = "";
      console.log("DAWDJAWUHDAWDUIYAWHUDIAWHUIDHUIAWHUI " + this.info[0].key);
      for (var i = 0; i < this.info.length; i++) {
        if (this.info[i].key == "Computers") {
          computers = this.info[i].value;
        }
        if (this.info[i].key == "Status") {
          status = this.info[i].value;
        }
      }
      console.log("STATUS:::::" + status);
      if (status == "Power Cables") {
        firebase.setValue("/buildings/" + this.room, {
          Computers: computers,
          Status: this.message
        });
      } else {
        firebase.setValue("/buildings/" + this.room, {
          Computers: computers,
          Status: this.message
        });
      }
      this.$navigateTo(HomePage);
    }
  },
  props: ["room"],
  mounted: function() {
    var onQueryEvent = result => {
      // note that the query returns 1 match at a time
      // in the order specified in the query
      if (!result.error) {
        this.info.push(result);
        console.log(result);
        console.log("Event type: " + result.type);
        console.log("Key: " + result.key);
        console.log("Value: " + JSON.stringify(result.value)); // a JSON object
        console.log("Children: " + JSON.stringify(result.children)); // an array, added in plugin v 8.0.0
      }
    };
    firebase.query(onQueryEvent, "/buildings/" + this.room, {
      orderBy: {
        type: firebase.QueryOrderByType.CHILD,
        value: "since" // mandatory when type is 'child'
      }
    });
  },
  beforeDestroy: function() {
    console.log("Done: " + this.info);
    console.log(this.info);
  }
};
</script>

<style scoped>
.text-color-primary {
  color: blue;
}
.list {
  font-size: 50px;
}
.buildings {
  font-size: 40px;
}
.button {
  margin-top: 10px;
  height: 10%;
}
.input {
  height: 10%;
  margin-top: 10px;
}
</style>