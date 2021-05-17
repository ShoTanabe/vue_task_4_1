import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home.vue';
import signup from './views/signup.vue';
import dashboard from './views/dashboard.vue';
import error from './views/error.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: home },
    { path: '/signup', component: signup },
    { path: '/dashboard', component: dashboard },
    { path: '/error', component: error }
  ]
});
