import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

import firebase from 'firebase/app'
var firebaseConfig = {
  apiKey: "AIzaSyDshjRyPmOuk405B5g_XRfz2ri_QuXsSmQ",
  authDomain: "vue-task-4.firebaseapp.com",
  databaseURL: "https://vue-task-4.firebaseio.com",
  projectId: "vue-task-4",
  storageBucket: "vue-task-4.appspot.com",
  messagingSenderId: "855203677483",
  appId: "1:855203677483:web:2c668b25f986a494f8716e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

require('@/assets/css/destyle.css');
