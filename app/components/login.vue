<template>
  <Page class="container">
    <StackLayout>
      <Button @tap="isLogged" text="Log In"/>
      <Label>{{loggedIn}}</Label>
      <Button text="Button" @tap="onButtonTap" />
    </StackLayout >
  </Page>
</template>
<script>
export default {
    data () {
        return {
          loggedIn: false
        }
    },
    methods: {
      isLogged: function(){
        this.loggedIn = true
        this.$parent.loggedIn = true
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
