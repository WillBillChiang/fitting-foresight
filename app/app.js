import Vue from "nativescript-vue";
import Home from "./components/Home";
import firebase from 'nativescript-plugin-firebase';


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
 instance => {
   console.log("firebase.init done");
 },
 error => {
   console.log('firebase.init error: ${error}');
 }
);
Vue.prototype.$firebase = firebase;


new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
