import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "@/components/app/Loader";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import currencyFilter from "./filters/currencyFilter";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyBQVR-1-94mknT4XcXs29y-7jT5dkVQlOA",
  authDomain: "vue-srm-91177.firebaseapp.com",
  projectId: "vue-srm-91177",
  storageBucket: "vue-srm-91177.appspot.com",
  messagingSenderId: "317273209511",
  appId: "1:317273209511:web:58ef7c6fe7c8b53b80b982",
  measurementId: "G-ZS49VZDPWC",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
