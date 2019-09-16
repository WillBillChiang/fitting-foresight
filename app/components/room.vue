<template>
  <Page class="container">
    <ListView class="list" for="item in info" >
      <v-template>
        <Label class="buildings" :text="item.key + ': ' + item.value"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script>

var firebase = require("nativescript-plugin-firebase");

export default {
  data () {
      return {
        info: [],
      }
  },
  props: ['room'],
  mounted: function(){
    var onQueryEvent = (result) => {
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

    firebase.query(
        onQueryEvent,
        "/buildings/"+this.room,
        {
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since' // mandatory when type is 'child'
            },
        }
    );


  },
  beforeDestroy: function(){
    console.log("Done: " + this.info);
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
