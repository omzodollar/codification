import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Firebase from 'firebase';
import { store } from './store/store';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Popup from 'vue-popup';
require('vue-popup/lib/popup.css');
Vue.use(VueAxios, axios);

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const config = {
  apiKey: "AIzaSyBPp46uLEnLEjvYVZwuOUFhqAkpueXFWGw",
    authDomain: "codification-bfe6e.firebaseapp.com",
    databaseURL: "https://codification-bfe6e.firebaseio.com",
    projectId: "codification-bfe6e",
    storageBucket: "codification-bfe6e.appspot.com",
    messagingSenderId: "454407502996"

};

// Initialize Firebase
Firebase.initializeApp(config);

// Set-up and use the Vue Router
// Pass in your routes and then
// Set the mode to use history
// removes # from the URL
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'nav-item active'
});

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in
router.beforeEach((to, from, next) => {

  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }

});

// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
Firebase.auth().onAuthStateChanged(function (user) {

  new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
  });

});
