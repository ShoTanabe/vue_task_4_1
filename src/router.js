import Vue from 'vue';
import Router from 'vue-router';

import home from './views/home.vue';
import signup from './views/signup.vue';
import dashboard from './views/dashboard.vue';
import error from './views/error.vue';

import firebase from 'firebase/app';
import "firebase/auth";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: home
    },
    {
       path: '/signup',
       component: signup
     },
    {
      path: '/dashboard',
      component: dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/error',
      component: error,
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
