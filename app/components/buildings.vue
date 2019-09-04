<template>
  <Page class="container">
    <ListView for="building in buildings" @itemTap="onBuildingTap">
      <v-template>
        <Label :text="building.text" />
      </v-template>
    </ListView>
  </Page>
</template>
<script>
export default {
    data () {
        return {
          buildings: [
            { name: '800s'},
            { name: '400s'},
            { name: 'Admin'}
          ]
        }
    },
    methods: {
      onBuildingTap: function(){
        console.log("bruh")
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
